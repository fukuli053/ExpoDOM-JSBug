"use dom";

import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export default function Example({}: { dom: import("expo/dom").DOMProps }) {
  const formulas = [
    {
      title: "Quadratik Formül",
      latex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    },
    {
      title: "Türev",
      latex: "\\frac{d}{dx}(x^n) = nx^{n-1}",
    },
    {
      title: "İntegral",
      latex: "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C",
    },
    {
      title: "Euler Formülü",
      latex: "e^{ix} = \\cos x + i\\sin x",
    },
    {
      title: "Limit",
      latex: "\\lim_{x \\to \\infty} \\frac{1}{x} = 0",
    },
  ];

  return (
    <div>
      <Latex>{`$e^{ix} = \\cos x + i\\sin x$`}</Latex>
    </div>
  );
}
