import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.lucasbortoli.comercial",
  appName: "Vendoista",
  webDir: "dist",
  // Usar essa configuração durante desenvolvimento + HMR
  server: {
    url: "http://192.168.65.150:5173",
    cleartext: true,
  },
};

export default config;
