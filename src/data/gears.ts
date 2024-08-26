import { z } from "zod";
import {
  Gear,
  GearComputing,
  GearComputingSchema,
  GearLens,
  GearLensSchema,
  GearSchema,
  GearSoftwareSchema,
} from "./commons";

export function getGears() {
  const { data: computing } = z.array(GearComputingSchema).safeParse([
    {
      brand: "Workstation",
      model: "Tower",
      type: "Desktop",
      cpu: "AMD Ryzen 9 3900X",
      gpu: "nVidia RTX 3070 Ti 8GB",
      ram: "32GB @ 3200MHz",
      storage: "N/A",
    },
    {
      brand: "Server",
      model: "Tower",
      type: "Desktop",
      cpu: "AMD Ryzen 5 3600",
      gpu: "nVidia GTX 1080 8GB + nVidia Tesla 24GB",
      ram: "16GB @ 3200MHz",
      storage: "N/A",
    },
    {
      brand: "Apple",
      model: "MacBook 16 in.",
      type: "Laptop",
      cpu: "10-core Apple M1 Pro",
      gpu: "16-core GPU",
      ram: "16 GB LPDDR5",
      storage: "512 GB",
    },
    {
      brand: "Framework",
      model: "Laptop 13 in.",
      type: "Laptop",
      cpu: "8-Core Intel i7-1165G7",
      gpu: "Iris Xe iGPU",
      ram: "48GB @ 3200MHz",
      storage: "1TB NVME SSD",
    },
    {
      brand: "Dell",
      model: "Precision 5530",
      type: "Laptop",
      cpu: "Intel i7-8850H",
      gpu: "nVidia Quadro M2000M",
      ram: "32GB",
      storage: "1TB NVME SSD",
    },
    {
      brand: "Apple",
      model: "MacBook Air 13 in.",
      type: "Laptop",
      cpu: "Apple M1",
      gpu: "Integrated",
      ram: "8GB",
      storage: "512GB SSD",
    },
    {
      brand: "Dell",
      model: "7390 2-in-1 13 in.",
      type: "Laptop",
      cpu: "Intel i7-8650U",
      gpu: "Integrated",
      ram: "16GB",
      storage: "256GB NVME SSD",
    },
    {
      brand: "Apple",
      model: "iPad Pro 11 in. Wi-Fi",
      type: "Tablet",
      cpu: "Apple M1",
      gpu: "Integrated",
      ram: "N/A",
      storage: "128GB SSD",
    },
  ] as GearComputing[]);

  const { data: gears } = z.array(GearSchema).safeParse([
    {
      brand: "Sony",
      model: "α7 II",
      type: "Camera",
    },
    {
      brand: "Sony",
      model: "ZV-E10",
      type: "Camera",
    },
    {
      brand: "Nikon",
      model: "D700",
      type: "Camera",
    },
    {
      brand: "Nikon",
      model: "Speedlight SB-300",
      type: "Peripheral/Accessory",
    },
  ] as Gear[]);

  const { data: lenses } = z.array(GearLensSchema).safeParse([
    {
      brand: "Sigma",
      model: "Art 24-70mm",
      type: "Lens",
      focal: "24-70mm",
      aperture: "f2.8",
      featureCodes: "DG DN",
    },
    {
      brand: "Sigma",
      model: "Art 30mm",
      type: "Lens",
      focal: "30mm",
      aperture: "f2.8",
      featureCodes: "DN",
    },
    {
      brand: "Nikkor",
      model: "28-70mm",
      type: "Lens",
      focal: "28-70mm",
      aperture: "f2.8",
      featureCodes: "ED",
    },
    {
      brand: "Nikkor",
      model: "24-85mm",
      type: "Lens",
      focal: "24-85mm",
      aperture: "f3.5-4.5",
      featureCodes: "VR",
    },
    {
      brand: "Nikkor",
      model: "50mm",
      type: "Lens",
      focal: "50mm",
      aperture: "f1.8",
      featureCodes: "VR",
    },
    {
      brand: "Nikkor",
      model: "70-300mm",
      type: "Lens",
      focal: "70-300mm",
      aperture: "f4.5-5.6",
      featureCodes: "",
    },
  ] as GearLens[]);

  const { data: software } = z.array(GearSoftwareSchema).safeParse([]);

  return { computing, gears, lenses, software };
}
