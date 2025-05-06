import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoletoService } from '../../services/boleto.service';
import { Boleto } from '../../models/boleto';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-punto4',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DataTablesModule,],
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  boletoForm: FormGroup;
  boletos: Boleto[] = [];
  precioFinal: number = 0;
  mostrarPrecio: boolean = false;
  dtOptions: DataTablesModule = {};
  
  // Categorías de turista
  categorias = [
    { id: 1, nombre: 'Menor', descuento: 0.35 },
    { id: 2, nombre: 'Adulto', descuento: 0 },
    { id: 3, nombre: 'Jubilado', descuento: 0.5 }
  ];
  
  // Resumen de ventas
  resumenVentas = {
    menor: { cantidad: 0, total: 0 },
    adulto: { cantidad: 0, total: 0 },
    jubilado: { cantidad: 0, total: 0 },
    totalGeneral: 0
  };

  constructor(private fb: FormBuilder, private boletoService: BoletoService) {
    this.boletoForm = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{7,8}$')]],
      precio: [0, [Validators.required, Validators.min(1)]],
      categoriaTurista: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      }
    };
    
    this.cargarBoletos();
    
    // Observar cambios en precio y categoría para calcular precio final
    this.boletoForm.get('precio')?.valueChanges.subscribe(() => {
      this.calcularPrecioFinal();
    });
    
    this.boletoForm.get('categoriaTurista')?.valueChanges.subscribe(() => {
      this.calcularPrecioFinal();
    });
  }
  
  cargarBoletos(): void {
    this.boletos = this.boletoService.obtenerBoletos();
    this.actualizarResumen();
  }
  
  calcularPrecioFinal(): void {
    const precio = this.boletoForm.get('precio')?.value;
    const categoriaId = this.boletoForm.get('categoriaTurista')?.value;
    
    if (precio && categoriaId) {
      const categoria = this.categorias.find(cat => cat.id === categoriaId);
      if (categoria) {
        this.precioFinal = precio - (precio * categoria.descuento);
        this.mostrarPrecio = true;
      }
    } else {
      this.mostrarPrecio = false;
    }
  }
  
  registrarBoleto(): void {
    if (this.boletoForm.valid) {
      const nuevoBoleto: Boleto = {
        ...this.boletoForm.value,
        fechaCompra: new Date(),
        precioFinal: this.precioFinal
      };
      
      this.boletoService.agregarBoleto(nuevoBoleto);
      this.cargarBoletos();
      this.boletoForm.reset();
      this.mostrarPrecio = false;
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.boletoForm.controls).forEach(key => {
        const control = this.boletoForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  actualizarResumen(): void {
    // Reiniciar resumen
    this.resumenVentas = {
      menor: { cantidad: 0, total: 0 },
      adulto: { cantidad: 0, total: 0 },
      jubilado: { cantidad: 0, total: 0 },
      totalGeneral: 0
    };
    
    // Calcular resumen
    this.boletos.forEach(boleto => {
      switch(boleto.categoriaTurista) {
        case 1: // Menor
          this.resumenVentas.menor.cantidad++;
          this.resumenVentas.menor.total += boleto.precioFinal;
          break;
        case 2: // Adulto
          this.resumenVentas.adulto.cantidad++;
          this.resumenVentas.adulto.total += boleto.precioFinal;
          break;
        case 3: // Jubilado
          this.resumenVentas.jubilado.cantidad++;
          this.resumenVentas.jubilado.total += boleto.precioFinal;
          break;
      }
      
      this.resumenVentas.totalGeneral += boleto.precioFinal;
    });
  }
  
  getNombreCategoria(categoriaId: number): string {
    const categoria = this.categorias.find(cat => cat.id === categoriaId);
    return categoria ? categoria.nombre : '';
  }
}
