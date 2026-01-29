import { type Product } from "../types/types"

export const products: Product[] = [
  // --- NIKE ---
  { id: 1, name: 'Nike Air Max 270', category: 'Calzado', price: 159.99, imageURL: 'https://picsum.photos/seed/nike-airmax270/800/800', description: 'Amortiguación reactiva y un estilo futurista que te hará sentir como si caminaras sobre nubes.' },
  { id: 2, name: 'Nike Revolution 6', category: 'Running', price: 59.99, imageURL: 'https://picsum.photos/seed/nike-revolution6/800/800', description: 'La versatilidad hecha zapatilla; ideales tanto para tu primera 5K como para ir al súper.' },
  { id: 3, name: 'Nike Training Tee', category: 'Ropa', price: 29.99, imageURL: 'https://picsum.photos/seed/nike-trainingtee/800/800', description: 'Tejido transpirable que gestiona el sudor mejor que tú tus finanzas los lunes.' },
  { id: 4, name: 'Nike Brasilia Gymsack', category: 'Accesorios', price: 19.99, imageURL: 'https://picsum.photos/seed/nike-gymsack/800/800', description: 'Ligera y minimalista. Perfecta para llevar lo justo y que no se te olvide nada en el vestuario.' },
  { id: 5, name: 'Nike Metcon 8', category: 'Fitness', price: 139.99, imageURL: 'https://picsum.photos/seed/nike-metcon8/800/800', description: 'Estabilidad de hierro para tus levantamientos y flexibilidad para tus saltos al cajón.' },

  // --- ADIDAS ---
  { id: 6, name: 'Adidas Ultraboost 22', category: 'Running', price: 189.99, imageURL: 'https://picsum.photos/seed/adidas-ultraboost22/800/800', description: 'Energía infinita en cada zancada. El retorno de energía es tan alto que casi corren solas.' },
  { id: 7, name: 'Adidas Samba OG', category: 'Calzado', price: 120.00, imageURL: 'https://picsum.photos/seed/adidas-samba/800/800', description: 'Un clásico que nunca muere. Tan atemporales que podrías heredarles estas a tus nietos.' },
  { id: 8, name: 'Adidas Tiro Tracksuit', category: 'Ropa', price: 75.00, imageURL: 'https://picsum.photos/seed/adidas-tiro/800/800', description: 'El uniforme oficial del confort. Perfecta para calentar o para un domingo de sofá extremo.' },
  { id: 9, name: 'Adidas Power Backpack', category: 'Accesorios', price: 45.00, imageURL: 'https://picsum.photos/seed/adidas-backpack/800/800', description: 'Resistente y espaciosa. Cabe tu portátil, tu ropa de gimnasio y tus sueños.' },
  { id: 10, name: 'Adidas Adilette Slides', category: 'Calzado', price: 35.00, imageURL: 'https://picsum.photos/seed/adidas-adilette/800/800', description: 'La sandalia definitiva. Si no tienes unas, ¿realmente has ido a una piscina alguna vez?' },

  // --- REEBOK ---
  { id: 11, name: 'Reebok Nano X3', category: 'Fitness', price: 140.00, imageURL: 'https://picsum.photos/seed/reebok-nanox3/800/800', description: 'Diseñadas para el WOD más exigente. Aguantan más que tú en una cena familiar.' },
  { id: 12, name: 'Reebok Classic Leather', category: 'Calzado', price: 90.00, imageURL: 'https://picsum.photos/seed/reebok-classicleather/800/800', description: 'Elegancia minimalista en cuero. Combinan con chándal o con algo más serio si te obligan.' },
  { id: 13, name: 'Reebok Identity Hoodie', category: 'Ropa', price: 55.00, imageURL: 'https://picsum.photos/seed/reebok-hoodie/800/800', description: 'Suavidad extrema. Es como si un cachorro de Golden Retriever te diera un abrazo constante.' },
  { id: 14, name: 'Reebok Training Shorts', category: 'Ropa', price: 30.00, imageURL: 'https://picsum.photos/seed/reebok-shorts/800/800', description: 'Corte ergonómico para que nada te frene en tus sentadillas profundas.' },
  { id: 15, name: 'Reebok Yoga Mat', category: 'Accesorios', price: 25.00, imageURL: 'https://picsum.photos/seed/reebok-yogamat/800/800', description: 'Agarre antideslizante para que tu "perro boca abajo" no termine en un "humano boca arriba".' },

  // --- PUMA ---
  { id: 16, name: 'Puma Velocity Nitro', category: 'Running', price: 110.00, imageURL: 'https://picsum.photos/seed/puma-velocity/800/800', description: 'Ligereza extrema con espuma de nitrógeno. Siente la velocidad sin perder el control.' },
  { id: 17, name: 'Puma RS-X Reinvent', category: 'Calzado', price: 115.00, imageURL: 'https://picsum.photos/seed/puma-rsx/800/800', description: 'Volumen y colores atrevidos. Para gente que no tiene miedo de que miren sus pies.' },
  { id: 18, name: 'Puma Essentials Cap', category: 'Accesorios', price: 15.00, imageURL: 'https://picsum.photos/seed/puma-cap/800/800', description: 'Protección solar clásica. Oculta tu pelo de recién levantado con mucho estilo.' },
  { id: 19, name: 'Puma Training Jacket', category: 'Ropa', price: 65.00, imageURL: 'https://picsum.photos/seed/puma-jacket/800/800', description: 'Corta el viento, pero no el rollo. Ideal para entrenos al aire libre en días grises.' },
  { id: 20, name: 'Puma Cali Women', category: 'Calzado', price: 95.00, imageURL: 'https://picsum.photos/seed/puma-cali/800/800', description: 'Inspiradas en el estilo relajado de California. Sol, playa y plataforma.' },

  // --- UNDER ARMOUR ---
  { id: 21, name: 'UA HOVR Phantom 3', category: 'Running', price: 145.00, imageURL: 'https://picsum.photos/seed/ua-hovrphantom/800/800', description: 'Amortiguación que elimina el impacto. Tus rodillas te darán las gracias por escrito.' },
  { id: 22, name: 'UA Tech 2.0 Short', category: 'Ropa', price: 25.00, imageURL: 'https://picsum.photos/seed/ua-techshorts/800/800', description: 'Tejido ultra suave que se siente natural. Tan cómodo que olvidarás que los llevas puestos.' },
  { id: 23, name: 'UA Hustle Backpack', category: 'Accesorios', price: 50.00, imageURL: 'https://picsum.photos/seed/ua-hustlebackpack/800/800', description: 'Repele el agua como si fuera magia. Tus cosas secas, pase lo que pase fuera.' },
  { id: 24, name: 'UA Compression Leggings', category: 'Ropa', price: 40.00, imageURL: 'https://picsum.photos/seed/ua-compression/800/800', description: 'Efecto segunda piel. Mejora la circulación y te hace sentir más rápido que un rayo.' },
  { id: 25, name: 'UA Rock Edition Tank', category: 'Ropa', price: 35.00, imageURL: 'https://picsum.photos/seed/ua-rocktank/800/800', description: 'Aprobada por "The Rock". Solo ponértela ya te da ganas de levantar 100 kilos.' },

  // --- NEW BALANCE ---
  { id: 26, name: 'NB 530 White', category: 'Calzado', price: 110.00, imageURL: 'https://picsum.photos/seed/nb-530white/800/800', description: 'La zapatilla de "padre" que se convirtió en el icono del street-style moderno.' },
  { id: 27, name: 'NB Fresh Foam X 880', category: 'Running', price: 160.00, imageURL: 'https://picsum.photos/seed/nb-freshfoam880/800/800', description: 'Kilómetros de confort garantizados. La espuma Fresh Foam es el secreto mejor guardado del running.' },
  { id: 28, name: 'NB Essentials Tee', category: 'Ropa', price: 30.00, imageURL: 'https://picsum.photos/seed/nb-essentialstee/800/800', description: 'Algodón premium para tu día a día. Sencilla, efectiva y necesaria.' },
  { id: 29, name: 'NB 990v5 Classic', category: 'Calzado', price: 220.00, imageURL: 'https://picsum.photos/seed/nb-990v5/800/800', description: 'Hechas para durar décadas. El equilibrio perfecto entre estatus y comodidad técnica.' },
  { id: 30, name: 'NB Sport Shorts', category: 'Ropa', price: 35.00, imageURL: 'https://picsum.photos/seed/nb-sportshorts/800/800', description: 'Libertad de movimiento total para que nada te detenga en tu sprint final.' },
]