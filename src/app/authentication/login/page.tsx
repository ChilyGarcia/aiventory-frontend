"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff, Package } from "lucide-react";

export default function InventarioLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de login - reemplazar con tu lógica real de autenticación
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    // Aquí puedes redirigir al usuario a la página de inventario
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Card Header */}
        <div className="p-6 space-y-2 text-center">
          <div className="flex justify-center mb-2">
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">Sistema de Inventario</h2>
          <p className="text-gray-500 text-sm">
            Ingresa tus credenciales para acceder al sistema
          </p>
        </div>

        {/* Card Content */}
        <div className="p-6 pt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium block">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium block">
                  Contraseña
                </label>
                <a
                  href="#"
                  className="text-xs text-emerald-600 hover:text-emerald-700"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded border border-gray-300 flex items-center justify-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="opacity-0 absolute h-4 w-4 cursor-pointer"
                />
                <div className="check-indicator bg-emerald-500 h-2 w-2 rounded-sm hidden"></div>
              </div>
              <label
                htmlFor="remember"
                className="text-sm font-normal cursor-pointer"
              >
                Recordar mis datos
              </label>
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
                isLoading
                  ? "bg-emerald-500 opacity-70 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
          </form>
        </div>

        {/* Card Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-center">
          <p className="text-sm text-gray-500">
            ¿No tienes una cuenta?{" "}
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Contacta al administrador
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

// Añadimos estilos para el checkbox personalizado
const styles = `
  input[type="checkbox"]:checked ~ .check-indicator {
    display: block;
  }
`;

// Añadimos los estilos al documento
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}
