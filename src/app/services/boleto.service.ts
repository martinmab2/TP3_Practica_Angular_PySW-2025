import { Injectable } from '@angular/core';
import { Boleto } from '../models/boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private readonly STORAGE_KEY = 'boletos';
  private boletos: Boleto[] = [];

  constructor() {
    this.cargarBoletos();
  }

  private cargarBoletos(): void {
    const boletosGuardados = localStorage.getItem(this.STORAGE_KEY);
    if (boletosGuardados) {
      this.boletos = JSON.parse(boletosGuardados).map((boleto: any) => ({
        ...boleto,
        fechaCompra: new Date(boleto.fechaCompra)
      }));
    }
  }

  private guardarBoletos(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.boletos));
  }

  obtenerBoletos(): Boleto[] {
    return [...this.boletos];
  }

  obtenerBoletoPorDni(dni: string): Boleto | undefined {
    return this.boletos.find(boleto => boleto.dni === dni);
  }

  agregarBoleto(boleto: Boleto): void {
    this.boletos.unshift(boleto); // Agregar al inicio para que aparezca primero en la lista
    this.guardarBoletos();
  }

  actualizarBoleto(dni: string, boletoActualizado: Boleto): boolean {
    const index = this.boletos.findIndex(boleto => boleto.dni === dni);
    if (index !== -1) {
      this.boletos[index] = boletoActualizado;
      this.guardarBoletos();
      return true;
    }
    return false;
  }

  eliminarBoleto(dni: string): boolean {
    const index = this.boletos.findIndex(boleto => boleto.dni === dni);
    if (index !== -1) {
      this.boletos.splice(index, 1);
      this.guardarBoletos();
      return true;
    }
    return false;
  }

  limpiarBoletos(): void {
    this.boletos = [];
    this.guardarBoletos();
  }
}