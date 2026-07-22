# Tailwind CSS — Configurações do Projeto

> **Versão:** Tailwind CSS v4  
> **Configuração:** feita via `@theme` em `src/index.css` (o `tailwind.config.ts` é ignorado no v4)

---

## Breakpoints

Estratégia **mobile-first** (classes base são para mobile).

| Token | Largura | Dispositivos-alvo |
|-------|---------|-------------------|
| *(base)* | < 375px | Celulares muito pequenos |
| `xs` | 375px | iPhone SE, iPhone X/11/12/13/14/15 |
| `smm` | 480px | Celulares maiores e landscape |
| `sm` | 640px | Tablets, small devices |
| `md` | 768px | Tablets landscape, small desktops |
| `lg` | 1024px | Desktops — **mais utilizado no projeto** |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large |

> `xs` e `smm` são customizados. Os demais são padrão do Tailwind v4.

**Declaração (em `src/index.css`):**
```css
@theme inline {
  --breakpoint-xs: 375px;
  --breakpoint-smm: 480px;
}
```

**Uso no JSX:**
```tsx
className="text-sm xs:text-base smm:text-lg sm:text-xl"
```

---

## Cores Customizadas

| Token | Valor | Uso |
|-------|-------|-----|
| `accent-red` | `#E51515` | Cor de identidade da marca (Mercedes-Benz) |

**Declaração (em `src/index.css`):**
```css
@theme inline {
  --color-accent-red: #E51515;
}
```

**Classes disponíveis:**
```
text-accent-red
bg-accent-red
border-accent-red
hover:text-accent-red
hover:border-accent-red
```

**Onde é usado:**
- `src/components/sections/Brands/index.tsx` — label "Parceiros" e hover nos cards de marcas

---

## Dark Mode

Ativado via classe `.dark` no elemento raiz.

**Declaração (em `src/index.css`):**
```css
@custom-variant dark (&:is(.dark *));
```

Controlado pelo `ThemeProvider` em `src/main.tsx`.

---

## Observações sobre o Tailwind v4

- No v4, **`tailwind.config.ts` é ignorado** por padrão (não há `@config` no CSS).
- Toda personalização deve ser feita via `@theme` no CSS.
- Os breakpoints padrão (`sm`, `md`, `lg`, `xl`, `2xl`) já vêm embutidos no v4 — não precisam ser declarados.
- A detecção de arquivos (content) é automática no v4.
