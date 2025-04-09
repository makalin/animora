export default function ripplePlugin() {
  const style = document.createElement('style');
  style.innerHTML = \`
    .ripple {
      position: relative;
      overflow: hidden;
    }
    .ripple::after {
      content: '';
      position: absolute;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      animation: ripple 0.6s linear;
    }
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  \`;
  document.head.appendChild(style);
}
