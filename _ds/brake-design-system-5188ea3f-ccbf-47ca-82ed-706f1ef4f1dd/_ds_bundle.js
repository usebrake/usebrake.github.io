/* @ds-bundle: {"format":3,"namespace":"BrakeDesignSystem_5188ea","components":[],"sourceHashes":{"ui_kits/desktop-app/Icon.jsx":"5ddd4c2b60c6","ui_kits/desktop-app/Primitives.jsx":"248f58d87a36","ui_kits/desktop-app/Screens.jsx":"4ba769b1d722","ui_kits/desktop-app/Shell.jsx":"a050463061cc","ui_kits/desktop-app/app.jsx":"2e1a5d92d246","ui_kits/desktop-app/icons-data.js":"5e6b0300408d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BrakeDesignSystem_5188ea = window.BrakeDesignSystem_5188ea || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/desktop-app/Icon.jsx
try { (() => {
// Icon.jsx — renders a Lucide icon from the window.BRAKE_ICONS map.
function Icon({
  name,
  size = 18,
  stroke = 2,
  className,
  style
}) {
  const inner = window.BRAKE_ICONS && window.BRAKE_ICONS[name] || "";
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}

// Brake brand mark — a calm "pause" glyph: two gold bars inside a soft ring.
// NOT a lock or shield. `variant` tints the ring + optional state glow
// (gold = default, teal = protected, amber = commitment). Bars stay gold.
function BrakeMark({
  size = 18,
  variant = "gold",
  glow = false
}) {
  const ringColor = {
    gold: "#e6cd9b",
    teal: "#5eead4",
    amber: "#ffb454"
  }[variant] || "#e6cd9b";
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    style: glow ? {
      filter: `drop-shadow(0 0 ${size * 0.16}px ${ringColor})`
    } : undefined
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: ringColor,
    strokeWidth: "1.6",
    opacity: variant === "gold" ? 0.5 : 0.85
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "8",
    width: "2.4",
    height: "8",
    rx: "1.2",
    fill: "#e6cd9b"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.4",
    y: "8",
    width: "2.4",
    height: "8",
    rx: "1.2",
    fill: "#e6cd9b"
  }));
}
Object.assign(window, {
  Icon,
  BrakeMark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Primitives.jsx — reusable Brake UI controls.
const {
  useState
} = React;
function Button({
  variant = "secondary",
  size,
  icon,
  iconRight,
  children,
  className = "",
  ...rest
}) {
  const sz = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "";
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `btn btn-${variant} ${sz} ${className}`
  }, rest), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === "lg" ? 18 : 16
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: 16
  }));
}
function IconButton({
  icon,
  bordered,
  size = 17,
  title,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `icon-btn ${bordered ? "bordered" : ""}`,
    title: title
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  }));
}
function Toggle({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `toggle ${on ? "on" : ""}`,
    role: "switch",
    "aria-checked": on,
    onClick: () => onChange && onChange(!on)
  });
}
function Checkbox({
  on,
  onChange,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `check ${on ? "on" : ""}`,
    onClick: () => onChange && onChange(!on)
  }, /*#__PURE__*/React.createElement("span", {
    className: "box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    stroke: 3
  })), children);
}
function Radio({
  selected,
  title,
  desc,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `radio ${selected ? "sel" : ""}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, title), desc && /*#__PURE__*/React.createElement("span", {
    className: "d"
  }, desc)));
}
function Stepper({
  value,
  setValue,
  min = 0,
  max = 999,
  step = 1,
  unit
}) {
  const clamp = v => Math.max(min, Math.min(max, v));
  return /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setValue(clamp(value - step)),
    "aria-label": "decrease"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, value), /*#__PURE__*/React.createElement("button", {
    onClick: () => setValue(clamp(value + step)),
    "aria-label": "increase"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  })), unit && /*#__PURE__*/React.createElement("span", {
    className: "unit"
  }, unit));
}
function Select({
  value,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "select"
  }, rest), /*#__PURE__*/React.createElement("span", null, value), /*#__PURE__*/React.createElement("span", {
    className: "chev"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16
  })));
}
function PasswordField({
  placeholder,
  value,
  onChange,
  mono
}) {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    className: `input ${mono ? "mono" : ""}`,
    type: show ? "text" : "password",
    placeholder: placeholder,
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "reveal",
    onClick: () => setShow(!show),
    tabIndex: -1,
    "aria-label": "toggle visibility"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: show ? "eye-off" : "eye",
    size: 16
  })));
}
function Badge({
  variant,
  icon,
  pulse,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `badge ${variant || ""}`
  }, pulse && /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 12
  }), children);
}
function Alert({
  variant = "info",
  title,
  children
}) {
  const iconFor = {
    info: "info",
    warn: "triangle-alert",
    danger: "shield-alert",
    safe: "shield-check"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `alert ${variant}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconFor[variant],
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, children)));
}
function Card({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `card ${className}`
  }, children);
}
function CardHead({
  icon,
  title,
  sub,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "lead-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, sub)), right);
}
Object.assign(window, {
  Button,
  IconButton,
  Toggle,
  Checkbox,
  Radio,
  Stepper,
  Select,
  PasswordField,
  Badge,
  Alert,
  Card,
  CardHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Screens.jsx
try { (() => {
// Screens.jsx — the main app screens for Brake.
const {
  useState: useS,
  useEffect: useE,
  useRef
} = React;

/* ---------------- Overview ---------------- */
function OverviewScreen({
  protectedOn,
  onArm,
  onDisarm
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Overview"), /*#__PURE__*/React.createElement("p", null, "Brake runs quietly on your computer and steps in only when it needs to.")), protectedOn ? /*#__PURE__*/React.createElement("div", {
    className: "status protected"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ring"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "state",
    style: {
      color: "var(--teal)"
    }
  }, "Protected"), /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, "You're covered"), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, "Brake is watching for explicit content in the background.")), /*#__PURE__*/React.createElement(Badge, {
    variant: "safe",
    pulse: true
  }, "Active")) : /*#__PURE__*/React.createElement("div", {
    className: "status off"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ring"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "power",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "state"
  }, "Off"), /*#__PURE__*/React.createElement("div", {
    className: "head",
    style: {
      color: "var(--fg-1)"
    }
  }, "Protection is off"), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, "Brake isn't watching your screen right now.")), /*#__PURE__*/React.createElement(Badge, null, "Idle")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), protectedOn ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-icon",
    style: {
      background: "var(--surface-2)",
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Protected since")), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--fg-1)",
      fontSize: 14
    }
  }, "Today, 9:14 AM")), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-icon",
    style: {
      background: "var(--surface-2)",
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scan-eye",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Screen checks"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Detection running on Display 1 \xB7 Balanced sensitivity")), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--fg-1)",
      fontSize: 14
    }
  }, "4,812")), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-icon",
    style: {
      background: "var(--teal-soft)",
      color: "var(--teal)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Interventions today"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Calm lockouts triggered when explicit content was detected")), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--fg-1)",
      fontSize: 14
    }
  }, "0")), /*#__PURE__*/React.createElement("div", {
    className: "card-pad",
    style: {
      borderTop: "1px solid var(--border-faint)",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "pause"
  }, "Pause for 5 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "shield-off",
    onClick: onDisarm
  }, "Turn off protection"))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    icon: "hand",
    title: "How Brake helps",
    sub: "A quiet pause between impulse and action"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-pad stack-3"
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "info",
    title: "It works entirely on your computer"
  }, "Brake watches your screen locally. Nothing you do is uploaded, recorded, or sent anywhere."), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    style: {
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-icon",
    style: {
      background: "var(--surface-2)",
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scan-eye",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "It notices explicit visual content"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "On-device detection, no screenshots saved."))), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    style: {
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-icon",
    style: {
      background: "var(--surface-2)",
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock-alert",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "It adds friction, calmly"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "A short lockout gives you a moment to step back."))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "shield-check",
    className: "btn-block",
    onClick: onArm
  }, "Turn on protection"))));
}

/* ---------------- Detection settings ---------------- */
function DetectionScreen() {
  const [sens, setSens] = useS("balanced");
  const [video, setVideo] = useS(true);
  const [images, setImages] = useS(true);
  const [blur, setBlur] = useS(true);
  const [dur, setDur] = useS(15);
  const [grace, setGrace] = useS(3);
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Detection"), /*#__PURE__*/React.createElement("p", null, "Tune how sensitive Brake is and what happens when it steps in.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    icon: "gauge",
    title: "Sensitivity",
    sub: "How readily Brake treats content as explicit"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radio-group"
  }, /*#__PURE__*/React.createElement(Radio, {
    selected: sens === "lenient",
    onClick: () => setSens("lenient"),
    title: "Lenient",
    desc: "Fewer interruptions. Only acts on clearly explicit content."
  }), /*#__PURE__*/React.createElement(Radio, {
    selected: sens === "balanced",
    onClick: () => setSens("balanced"),
    title: "Balanced \u2014 recommended",
    desc: "A steady middle ground for everyday use."
  }), /*#__PURE__*/React.createElement(Radio, {
    selected: sens === "strict",
    onClick: () => setSens("strict"),
    title: "Strict",
    desc: "Acts early and often. Best during a focused reset."
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    icon: "scan-eye",
    title: "What to watch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Scan video"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Check moving content in players and browser tabs.")), /*#__PURE__*/React.createElement(Toggle, {
    on: video,
    onChange: setVideo
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Scan still images"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Check images on pages and in the gallery.")), /*#__PURE__*/React.createElement(Toggle, {
    on: images,
    onChange: setImages
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Blur the screen during a lockout"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Soften what's on screen the moment Brake steps in.")), /*#__PURE__*/React.createElement(Toggle, {
    on: blur,
    onChange: setBlur
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    icon: "clock-alert",
    title: "When Brake steps in"
  }), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Lockout length"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "How long the screen stays locked after detection.")), /*#__PURE__*/React.createElement(Stepper, {
    value: dur,
    setValue: setDur,
    min: 5,
    max: 120,
    step: 5,
    unit: "min"
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Grace before lockout"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "A brief window to close the content yourself first.")), /*#__PURE__*/React.createElement(Stepper, {
    value: grace,
    setValue: setGrace,
    min: 0,
    max: 15,
    step: 1,
    unit: "sec"
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Monitored displays"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Choose which screens Brake keeps an eye on.")), /*#__PURE__*/React.createElement(Select, {
    value: "Display 1 (primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Alert, {
    variant: "warn",
    title: "Changing detection while protected"
  }, "Lowering sensitivity or turning off scanning takes effect after a short commitment delay."));
}

/* ---------------- Commitment dialog ---------------- */
function CommitmentDialog({
  onCancel,
  onConfirm
}) {
  const [secs, setSecs] = useS(20);
  const [typed, setTyped] = useS("");
  const phrase = "step back";
  useE(() => {
    if (secs <= 0) return;
    const t = setTimeout(() => setSecs(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secs]);
  const ready = secs <= 0 && typed.trim().toLowerCase() === phrase;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialog-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-ico warn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hand",
    size: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Take a moment before turning off"), /*#__PURE__*/React.createElement("p", null, "Turning off protection removes the pause you set up for yourself. There's no rush \u2014 sit with the decision for a few seconds.")), /*#__PURE__*/React.createElement("div", {
    className: "dialog-body stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Type ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--fg-1)"
    }
  }, "\u201C", phrase, "\u201D"), " to continue"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: phrase,
    value: typed,
    onChange: e => setTyped(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "spread",
    style: {
      fontSize: 13,
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Reflection delay"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: secs > 0 ? "var(--amber)" : "var(--teal)",
      fontSize: 14
    }
  }, secs > 0 ? `0:${String(secs).padStart(2, "0")}` : "Ready"))), /*#__PURE__*/React.createElement("div", {
    className: "dialog-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onCancel
  }, "Stay protected"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    className: "solid",
    disabled: !ready,
    onClick: onConfirm
  }, "Turn off anyway"))));
}

/* ---------------- Recovery code dialog ---------------- */
function RecoveryDialog({
  onClose
}) {
  const [copied, setCopied] = useS(false);
  const code = "BRAKE-7Q4M-K28D-RJ9V";
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialog-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-ico gold"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key-round",
    size: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Save your recovery code"), /*#__PURE__*/React.createElement("p", null, "This is the only way back in if you forget your passphrase. Keep it somewhere safe and private \u2014 a password manager works well.")), /*#__PURE__*/React.createElement("div", {
    className: "dialog-body stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-sink)",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--r-sm)",
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 17,
      color: "var(--gold)",
      letterSpacing: "0.08em"
    }
  }, code), /*#__PURE__*/React.createElement(IconButton, {
    icon: copied ? "check" : "copy",
    bordered: true,
    title: "Copy",
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  })), /*#__PURE__*/React.createElement(Alert, {
    variant: "info",
    title: "Brake can't recover this for you"
  }, "For your privacy, the code is stored only on this computer. If you lose it, you'll need to reinstall."), /*#__PURE__*/React.createElement(Checkbox, {
    on: true,
    onChange: () => {}
  }, "I've saved my recovery code somewhere safe")), /*#__PURE__*/React.createElement("div", {
    className: "dialog-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check",
    onClick: onClose
  }, "Done"))));
}

/* ---------------- Lockout screen ---------------- */
function LockoutScreen({
  onClear
}) {
  const total = 90;
  const [left, setLeft] = useS(total);
  useE(() => {
    if (left <= 0) return;
    const t = setTimeout(() => setLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);
  const m = Math.floor(left / 60),
    s = left % 60;
  const pct = (total - left) / total * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "lockout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lock-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock-keyhole",
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Locked \xB7 taking a pause"), /*#__PURE__*/React.createElement("h1", null, "Brake stepped in"), /*#__PURE__*/React.createElement("p", null, "The screen is locked for a short while. This is the moment you set up \u2014 breathe, stand up, get a glass of water."), /*#__PURE__*/React.createElement("div", {
    className: "countdown"
  }, m, ":", String(s).padStart(2, "0"), /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, left > 0 ? "until the lock lifts" : "you can continue")), /*#__PURE__*/React.createElement("div", {
    className: "meter"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: `${pct}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "key-round",
    onClick: onClear,
    style: {
      color: "var(--fg-4)"
    }
  }, "Use recovery code")));
}
Object.assign(window, {
  OverviewScreen,
  DetectionScreen,
  CommitmentDialog,
  RecoveryDialog,
  LockoutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Shell.jsx
try { (() => {
// Shell.jsx — window chrome, title bar, tabs.
function TitleBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "titlebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement(BrakeMark, {
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, "Brake")), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "winbtns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "winbtn",
    "aria-label": "minimize"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    className: "winbtn",
    "aria-label": "maximize"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "square",
    size: 13
  })), /*#__PURE__*/React.createElement("button", {
    className: "winbtn close",
    "aria-label": "close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15
  }))));
}
function Tabs({
  active,
  setActive,
  protectedOn
}) {
  const tabs = [{
    id: "overview",
    label: "Overview",
    icon: "gauge"
  }, {
    id: "detection",
    label: "Detection",
    icon: "scan-eye"
  }, {
    id: "activity",
    label: "Activity",
    icon: "activity"
  }, {
    id: "settings",
    label: "Settings",
    icon: "settings"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `tab ${active === t.id ? "active" : ""}`,
    onClick: () => setActive(t.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 16
  }), t.label, t.id === "overview" && protectedOn && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }))));
}
function Window({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "win"
  }, /*#__PURE__*/React.createElement(TitleBar, null), children);
}
Object.assign(window, {
  TitleBar,
  Tabs,
  Window
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/app.jsx
try { (() => {
// app.jsx — wires the Brake desktop app together.
const {
  useState: useState2
} = React;
function ActivityScreen() {
  const rows = [{
    t: "Protection turned on",
    d: "Today, 9:14 AM",
    icon: "shield-check",
    c: "var(--teal)"
  }, {
    t: "Sensitivity set to Balanced",
    d: "Today, 9:14 AM",
    icon: "gauge",
    c: "var(--fg-3)"
  }, {
    t: "Lockout completed",
    d: "Yesterday, 10:42 PM",
    icon: "circle-check",
    c: "var(--teal)"
  }, {
    t: "Brake stepped in · 90s lockout",
    d: "Yesterday, 10:40 PM",
    icon: "lock-keyhole",
    c: "var(--lock-blue)"
  }, {
    t: "Protection turned on",
    d: "Yesterday, 8:01 PM",
    icon: "shield-check",
    c: "var(--teal)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Activity"), /*#__PURE__*/React.createElement("p", null, "A private, on-device log of what Brake has done. Only you can see it.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    className: "card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brake-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    className: "flex",
    style: {
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 30,
      color: "var(--fg-1)"
    }
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, "interventions"))), /*#__PURE__*/React.createElement(Card, {
    className: "card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brake-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Longest streak protected"), /*#__PURE__*/React.createElement("div", {
    className: "flex",
    style: {
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 30,
      color: "var(--gold)"
    }
  }, "12"), /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, "days")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    icon: "activity",
    title: "Recent events"
  }), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "srow",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-icon",
    style: {
      background: "var(--surface-2)",
      color: r.c
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, r.t)), /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 12
    }
  }, r.d)))));
}
function SettingsScreen({
  onShowRecovery
}) {
  const [startup, setStartup] = useState2(true);
  const [tray, setTray] = useState2(true);
  const [notify, setNotify] = useState2(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Settings"), /*#__PURE__*/React.createElement("p", null, "General preferences and your account recovery.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    icon: "settings",
    title: "General"
  }), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Start Brake when Windows starts"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Protection picks up where you left off.")), /*#__PURE__*/React.createElement(Toggle, {
    on: startup,
    onChange: setStartup
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Keep Brake in the system tray"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Runs quietly in the background near the clock.")), /*#__PURE__*/React.createElement(Toggle, {
    on: tray,
    onChange: setTray
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Show a gentle desktop notice on lockout"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "A small, calm message \u2014 never a loud alarm.")), /*#__PURE__*/React.createElement(Toggle, {
    on: notify,
    onChange: setNotify
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    icon: "key-round",
    title: "Passphrase & recovery",
    sub: "Protects your settings from being changed on impulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-pad stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Current passphrase"), /*#__PURE__*/React.createElement(PasswordField, {
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "New passphrase"), /*#__PURE__*/React.createElement(PasswordField, {
    placeholder: "Choose a new passphrase"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "spread"
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, "Recovery code lets you back in if you forget."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "key-round",
    onClick: onShowRecovery
  }, "View recovery code")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Card, {
    className: "card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spread"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t",
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--fg-1)"
    }
  }, "Uninstall protection"), /*#__PURE__*/React.createElement("div", {
    className: "d",
    style: {
      fontSize: 12,
      color: "var(--fg-3)",
      marginTop: 3
    }
  }, "Removing Brake requires your passphrase or recovery code.")), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "shield-off"
  }, "Remove Brake\u2026"))));
}
function TrayMenu({
  protectedOn,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tray"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tray-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, /*#__PURE__*/React.createElement(BrakeMark, {
    size: 18,
    variant: protectedOn ? "teal" : "gold"
  })), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Brake"), /*#__PURE__*/React.createElement("span", {
    className: "st",
    style: {
      color: protectedOn ? "var(--teal)" : "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), protectedOn ? "Protected" : "Off")), /*#__PURE__*/React.createElement("div", {
    className: "tray-item",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gauge",
    size: 16
  }), "Open Brake"), /*#__PURE__*/React.createElement("div", {
    className: "tray-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pause",
    size: 16
  }), "Pause for 5 minutes"), /*#__PURE__*/React.createElement("div", {
    className: "tray-sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tray-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scan-eye",
    size: 16
  }), "Detection settings"), /*#__PURE__*/React.createElement("div", {
    className: "tray-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 16
  }), "Activity"), /*#__PURE__*/React.createElement("div", {
    className: "tray-sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tray-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }), "Quit Brake", /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Locked")));
}
function App() {
  const [tab, setTab] = useState2("overview");
  const [prot, setProt] = useState2(false);
  const [dialog, setDialog] = useState2(null); // null | commitment | recovery
  const [lockout, setLockout] = useState2(false);
  const [showTray, setShowTray] = useState2(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "app-root"
  }, /*#__PURE__*/React.createElement(Window, null, /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    setActive: setTab,
    protectedOn: prot
  }), tab === "overview" && /*#__PURE__*/React.createElement(OverviewScreen, {
    protectedOn: prot,
    onArm: () => setProt(true),
    onDisarm: () => setDialog("commitment")
  }), tab === "detection" && /*#__PURE__*/React.createElement(DetectionScreen, null), tab === "activity" && /*#__PURE__*/React.createElement(ActivityScreen, null), tab === "settings" && /*#__PURE__*/React.createElement(SettingsScreen, {
    onShowRecovery: () => setDialog("recovery")
  }), dialog === "commitment" && /*#__PURE__*/React.createElement(CommitmentDialog, {
    onCancel: () => setDialog(null),
    onConfirm: () => {
      setProt(false);
      setDialog(null);
    }
  }), dialog === "recovery" && /*#__PURE__*/React.createElement(RecoveryDialog, {
    onClose: () => setDialog(null)
  }), lockout && /*#__PURE__*/React.createElement(LockoutScreen, {
    onClear: () => setLockout(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "demo-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-label"
  }, "Demo"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setProt(true);
      setTab("overview");
    }
  }, "Protected state"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setProt(false);
      setTab("overview");
    }
  }, "Off state"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDialog("commitment")
  }, "Commitment"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDialog("recovery")
  }, "Recovery code"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLockout(true)
  }, "Lockout"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowTray(v => !v)
  }, "Tray menu")), showTray && /*#__PURE__*/React.createElement("div", {
    className: "tray-float"
  }, /*#__PURE__*/React.createElement(TrayMenu, {
    protectedOn: prot,
    onOpen: () => {
      setShowTray(false);
      setTab("overview");
    }
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/icons-data.js
try { (() => {
// Auto-generated Lucide icon inner-SVG map (stroke 2, 24x24 viewBox).
window.BRAKE_ICONS = {
  "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />\n  <path d=\"m9 12 2 2 4-4\" />",
  "shield-off": "<path d=\"m2 2 20 20\" />\n  <path d=\"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71\" />\n  <path d=\"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264\" />",
  "shield-alert": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />\n  <path d=\"M12 8v4\" />\n  <path d=\"M12 16h.01\" />",
  "power": "<path d=\"M12 2v10\" />\n  <path d=\"M18.4 6.6a9 9 0 1 1-12.77.04\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "eye-off": "<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" />\n  <path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" />\n  <path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" />\n  <path d=\"m2 2 20 20\" />",
  "sliders-horizontal": "<path d=\"M10 5H3\" />\n  <path d=\"M12 19H3\" />\n  <path d=\"M14 3v4\" />\n  <path d=\"M16 17v4\" />\n  <path d=\"M21 12h-9\" />\n  <path d=\"M21 19h-5\" />\n  <path d=\"M21 5h-7\" />\n  <path d=\"M8 10v4\" />\n  <path d=\"M8 12H3\" />",
  "activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 6v6l4 2\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" />\n  <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "lock-keyhole": "<circle cx=\"12\" cy=\"16\" r=\"1\" />\n  <rect x=\"3\" y=\"10\" width=\"18\" height=\"12\" rx=\"2\" />\n  <path d=\"M7 10V7a5 5 0 0 1 10 0v3\" />",
  "unlock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" />\n  <path d=\"M7 11V7a5 5 0 0 1 9.9-1\" />",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" />\n  <path d=\"M12 9v4\" />\n  <path d=\"M12 17h.01\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 16v-4\" />\n  <path d=\"M12 8h.01\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"m9 12 2 2 4-4\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "x": "<path d=\"M18 6 6 18\" />\n  <path d=\"m6 6 12 12\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\" />",
  "plus": "<path d=\"M5 12h14\" />\n  <path d=\"M12 5v14\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "key-round": "<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\" />\n  <circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" />",
  "file-text": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" />\n  <path d=\"M14 2v5a1 1 0 0 0 1 1h5\" />\n  <path d=\"M10 9H8\" />\n  <path d=\"M16 13H8\" />\n  <path d=\"M16 17H8\" />",
  "monitor": "<rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\" />\n  <line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\" />\n  <line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\" />",
  "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />",
  "bell-off": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742\" />\n  <path d=\"m2 2 20 20\" />\n  <path d=\"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05\" />",
  "pause": "<rect x=\"14\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" />\n  <rect x=\"5\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" />",
  "play": "<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\" />",
  "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\" />",
  "rotate-cw": "<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\" />\n  <path d=\"M21 3v5h-5\" />",
  "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" />\n  <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />",
  "gauge": "<path d=\"m12 14 4-4\" />\n  <path d=\"M3.34 19a10 10 0 1 1 17.32 0\" />",
  "scan-eye": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\" />\n  <path d=\"M17 3h2a2 2 0 0 1 2 2v2\" />\n  <path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" />\n  <path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" />\n  <circle cx=\"12\" cy=\"12\" r=\"1\" />\n  <path d=\"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0\" />",
  "calendar": "<path d=\"M8 2v4\" />\n  <path d=\"M16 2v4\" />\n  <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" />\n  <path d=\"M3 10h18\" />",
  "settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" />\n  <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "clock-alert": "<path d=\"M12 6v6l4 2\" />\n  <path d=\"M20 12v5\" />\n  <path d=\"M20 21h.01\" />\n  <path d=\"M21.25 8.2A10 10 0 1 0 16 21.16\" />",
  "heart-handshake": "<path d=\"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762\" />",
  "minus-square": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />\n  <path d=\"M8 12h8\" />",
  "square": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />",
  "minimize-2": "<path d=\"m14 10 7-7\" />\n  <path d=\"M20 10h-6V4\" />\n  <path d=\"m3 21 7-7\" />\n  <path d=\"M4 14h6v6\" />",
  "hand": "<path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2\" />\n  <path d=\"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\" />\n  <path d=\"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\" />\n  <path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\" />"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/icons-data.js", error: String((e && e.message) || e) }); }

})();
