import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      /**
       * BREAKPOINTS STRATEGY
       * 
       * Mobile-first approach (base classes are for mobile)
       * Utiliza os breakpoints padrão do Tailwind + extensões para futuros crescimentos
       * 
       * - xs:  375px  (iPhone SE, iPhone X/11/12/13/14/15 (largura comum))
       * - smm: 480px  (celulares maiores e em landscape)
       * - sm:  640px  (tablets, small devices)
       * - md:  768px  (tablets landscape, small desktops)
       * - lg:  1024px (desktops) — MAIS UTILIZADO NO PROJETO
       * - xl:  1280px (large desktops) — reservado para expansão futura
       * - 2xl: 1536px (extra large) — reservado para expansão futura
       */
      screens: {
        xs: '375px',
        smm: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      /**
       * CUSTOM COLORS
       * 
       * accent-red: cor de identidade da marca (Mercedes-Benz)
       * Utilizada em labels "Parceiros", hover effects e elementos destacados
       * 
       * Uso: text-accent-red, bg-accent-red, border-accent-red, hover:text-accent-red
       * Alternativa mantida: inline colors como text-[#E51515] continuam funcionando
       */
      colors: {
        'accent-red': '#E51515',
      },

      /**
       * CONTAINER CONFIGURATION
       * 
       * Padrão encontrado em todos os componentes: max-w-7xl
       * Centralização com padding responsivo (px-4 sm:px-6 lg:px-8)
       */
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',      // px-4
          sm: '1.5rem',         // sm:px-6
          lg: '2rem',           // lg:px-8
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },

      /**
       * SPACING EXTENSION
       * 
       * Mantém espaçamento padrão do Tailwind
       * Valores documentados já usados no projeto:
       * - gap: 3, 4, 6, 8, 12
       * - padding/margin: 14, 20 (seções)
       */
      spacing: {
        // Já padrão, documentado apenas
        // 4: '1rem', etc. são defaults do Tailwind
      },

      /**
       * TYPOGRAPHY
       * 
       * Mantém escala de fontes padrão do Tailwind
       * Padrões encontrados:
       * - Títulos: text-3xl sm:text-4xl lg:text-5xl
       * - Corpo: text-base, text-sm
       * - Labels: text-sm uppercase font-semibold
       */
      fontSize: {
        // Usando defaults do Tailwind
        // Extensões podem ser adicionadas aqui se necessário
      },

      /**
       * ANIMATION & TRANSITIONS
       * 
       * Mantém duração padrão de transições encontradas:
       * - duration-200 (hover effects)
       * - duration-700 (fade animations)
       * - duration-1000 (longer animations)
       */
    },
  },
  plugins: [],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
}

export default config
