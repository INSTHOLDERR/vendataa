const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Nunito:wght@300;400;500;600&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    :root{
      --rose:#FF3D8B;--bloom:#FF79AD;--petal:#FFB0CE;
      --deep:#7A0040;--wine:#B5185F;--purple:#9B5DE5;
      --glass:rgba(255,255,255,0.22);--gborder:rgba(255,255,255,0.5);
    }
    html{scroll-behavior:smooth;}
    body{font-family:'Nunito',sans-serif;background:#FF6FA8;min-height:100vh;overflow-x:hidden;cursor:pointer;}
    button,a,[role="button"],.clickable{cursor:pointer;}

    #bg-mesh{
      position:fixed;inset:0;z-index:0;pointer-events:none;
      background:
        radial-gradient(ellipse 80% 60% at 20% 10%,#FF8EC3 0%,transparent 60%),
        radial-gradient(ellipse 70% 80% at 80% 90%,#C084FC 0%,transparent 55%),
        radial-gradient(ellipse 90% 70% at 60% 30%,#FFB3CE 0%,transparent 60%),
        linear-gradient(145deg,#FF4F91 0%,#FF9DC6 40%,#E879F9 80%,#C084FC 100%);
      animation:meshShift 12s ease-in-out infinite alternate;
    }
    @keyframes meshShift{
      0%{filter:hue-rotate(0deg) brightness(1);}
      50%{filter:hue-rotate(12deg) brightness(1.05);}
      100%{filter:hue-rotate(-8deg) brightness(0.97);}
    }

    .ptcl{position:fixed;pointer-events:none;z-index:1;animation:floatUp linear infinite;will-change:transform,opacity;}
    @keyframes floatUp{
      0%{transform:translateY(105vh) scale(0.7) rotate(0deg);opacity:0;}
      8%{opacity:1;}92%{opacity:0.7;}
      100%{transform:translateY(-12vh) scale(1.1) rotate(540deg);opacity:0;}
    }

    .nav{
      position:fixed;top:0;left:0;right:0;z-index:200;
      display:flex;align-items:center;justify-content:space-between;
      padding:10px 16px;
      background:rgba(255,80,145,0.22);
      backdrop-filter:blur(28px) saturate(180%);
      border-bottom:1px solid rgba(255,255,255,0.4);
      gap:8px;
    }
    .nav-logo{
      font-family:'Playfair Display',serif;
      font-size:16px;font-weight:700;white-space:nowrap;
      background:linear-gradient(90deg,#fff,#FFD6EC);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;
      background-clip:text;flex-shrink:0;
    }
    .nav-tabs{display:flex;gap:2px;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;}
    .nav-tabs::-webkit-scrollbar{display:none;}
    .ntab{
      border:none;background:transparent;cursor:pointer;
      padding:6px 10px;border-radius:50px;
      font-family:'Nunito',sans-serif;font-size:11px;font-weight:700;
      color:rgba(255,255,255,0.85);transition:all 0.22s ease;
      white-space:nowrap;flex-shrink:0;
    }
    .ntab:hover{background:rgba(255,255,255,0.2);color:#fff;}
    .ntab.on{background:rgba(255,255,255,0.32);color:#fff;box-shadow:0 2px 12px rgba(0,0,0,0.12);}
    @media(max-width:480px){
      .nav{padding:8px 10px;}
      .nav-logo{font-size:13px;}
      .ntab{padding:5px 8px;font-size:10px;}
    }
    @media(max-width:360px){
      .nav-logo{font-size:12px;}
      .ntab{padding:4px 7px;font-size:9px;}
    }

    .pg{display:none;position:relative;z-index:2;}
    .pg.on{display:block;animation:pgIn 0.45s cubic-bezier(.4,0,.2,1) forwards;}
    @keyframes pgIn{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}

    .glass{
      background:rgba(255,255,255,0.22);
      backdrop-filter:blur(24px) saturate(160%);
      border:1.5px solid rgba(255,255,255,0.45);
      border-radius:28px;
      box-shadow:0 8px 40px rgba(180,20,90,0.15),inset 0 1px 0 rgba(255,255,255,0.5);
    }
    .wrap{max-width:580px;margin:0 auto;padding:80px 14px 70px;}

    .btn-rose{
      display:inline-flex;align-items:center;justify-content:center;gap:8px;
      background:linear-gradient(135deg,#FF3D8B,#C026D3);
      color:#fff;border:none;border-radius:50px;
      padding:12px 26px;font-size:14px;font-weight:700;
      font-family:'Nunito',sans-serif;cursor:pointer;
      box-shadow:0 4px 22px rgba(255,61,139,0.45);
      transition:all 0.22s ease;white-space:nowrap;
    }
    .btn-rose:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(255,61,139,0.55);}
    .btn-rose:active{transform:scale(0.96);}
    .btn-ghost{
      display:inline-flex;align-items:center;gap:6px;
      background:rgba(255,255,255,0.3);border:1.5px solid rgba(255,255,255,0.55);
      border-radius:50px;padding:11px 22px;
      font-size:13px;font-weight:700;color:#fff;
      font-family:'Nunito',sans-serif;cursor:pointer;
      transition:all 0.2s ease;white-space:nowrap;
    }
    .btn-ghost:hover{background:rgba(255,255,255,0.45);transform:translateY(-1px);}

    .pill{
      display:inline-flex;align-items:center;gap:4px;
      background:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.55);
      border-radius:50px;padding:4px 12px;
      font-size:12px;font-weight:700;color:#fff;white-space:nowrap;
    }
    .stitle{font-family:'Playfair Display',serif;font-size:clamp(26px,6.5vw,38px);font-weight:700;color:#fff;line-height:1.18;}
    .ssub{font-size:14px;color:rgba(255,255,255,0.8);line-height:1.7;}

    .fwrap{perspective:1100px;cursor:pointer;border-radius:20px;}
    .finner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.6s cubic-bezier(.4,2,.5,1);}
    .fwrap.flipped .finner{transform:rotateY(180deg);}
    .ffront,.fback{position:absolute;inset:0;backface-visibility:hidden;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:18px;}
    .fback{transform:rotateY(180deg);background:rgba(255,255,255,0.82);}

    .bar-track{height:10px;background:rgba(255,255,255,0.2);border-radius:8px;overflow:hidden;}
    .bar-fill{height:100%;background:linear-gradient(90deg,#fff,#FFD6EC);border-radius:8px;transform:scaleX(0);transform-origin:left;animation:barFill 1.5s cubic-bezier(.4,0,.2,1) forwards;}
    @keyframes barFill{to{transform:scaleX(1);}}

    .song-card{
      display:flex;align-items:center;gap:12px;
      padding:12px 14px;border-radius:16px;
      background:rgba(255,255,255,0.18);
      border:1.5px solid rgba(255,255,255,0.3);
      cursor:pointer;transition:all 0.22s ease;
      text-decoration:none;
    }
    .song-card:hover{background:rgba(255,255,255,0.32);transform:translateX(4px);}
    .song-card.playing{border-color:#fff;background:rgba(255,255,255,0.3);}

    .wbar{width:3px;border-radius:2px;background:linear-gradient(to top,#fff,#FFD6EC);animation:waveAnim ease-in-out infinite alternate;}
    @keyframes waveAnim{from{transform:scaleY(0.15);}to{transform:scaleY(1);}}

    .bbl{
      position:absolute;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      transform:translate(-50%,-50%);cursor:pointer;
      background:rgba(255,255,255,0.28);
      border:2px solid rgba(255,255,255,0.6);
      backdrop-filter:blur(6px);
      animation:bob ease-in-out infinite alternate;
      transition:transform 0.12s,opacity 0.15s;
      user-select:none;
    }
    .bbl:hover{transform:translate(-50%,-50%) scale(1.15);}
    .bbl.popped{transform:translate(-50%,-60%) scale(0);opacity:0;pointer-events:none;}
    @keyframes bob{from{margin-top:0;}to{margin-top:-10px;}}

    .bbl-msg{
      position:absolute;
      transform:translate(-50%,-50%);
      pointer-events:none;
      font-family:'Playfair Display',serif;
      font-size:clamp(10px,2.5vw,13px);
      color:#fff;font-weight:700;
      text-shadow:0 1px 6px rgba(120,0,60,0.5);
      white-space:nowrap;
      animation:msgPop 1.6s ease forwards;
      z-index:10;
    }
    @keyframes msgPop{
      0%{opacity:0;transform:translate(-50%,-50%) scale(0.5);}
      20%{opacity:1;transform:translate(-50%,-70%) scale(1.1);}
      70%{opacity:1;transform:translate(-50%,-90%) scale(1);}
      100%{opacity:0;transform:translate(-50%,-120%) scale(0.8);}
    }

    .tl-item{display:flex;gap:16px;position:relative;padding-bottom:28px;}
    .tl-item::after{content:'';position:absolute;left:19px;top:40px;bottom:0;width:2px;background:linear-gradient(to bottom,rgba(255,255,255,0.5),transparent);}
    .tl-item:last-child::after{display:none;}
    .tl-dot{width:40px;height:40px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#FF3D8B,#9B5DE5);display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 4px 14px rgba(255,61,139,0.4);}

    .photo-slot{
      aspect-ratio:1/1;border-radius:20px;
      border:2px dashed rgba(255,255,255,0.5);
      display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:8px;
      background:rgba(255,255,255,0.12);
      position:relative;overflow:hidden;
      cursor:pointer;transition:all 0.22s;
    }
    .photo-slot:hover{background:rgba(255,255,255,0.28);border-color:rgba(255,255,255,0.9);transform:scale(1.03);}
    .photo-slot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:18px;}
    .photo-slot input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}

    .msg-input{
      width:100%;background:rgba(255,255,255,0.2);
      border:1.5px solid rgba(255,255,255,0.4);
      border-radius:14px;padding:12px 16px;
      font-family:'Nunito',sans-serif;font-size:14px;
      color:#fff;outline:none;resize:vertical;min-height:100px;
      transition:border 0.2s;
    }
    .msg-input::placeholder{color:rgba(255,255,255,0.55);}
    .msg-input:focus{border-color:rgba(255,255,255,0.8);}
    .name-input{
      width:100%;background:rgba(255,255,255,0.2);
      border:1.5px solid rgba(255,255,255,0.4);
      border-radius:14px;padding:11px 16px;
      font-family:'Nunito',sans-serif;font-size:14px;
      color:#fff;outline:none;
      transition:border 0.2s;
    }
    .name-input::placeholder{color:rgba(255,255,255,0.55);}
    .name-input:focus{border-color:rgba(255,255,255,0.8);}

    .mbtn{background:rgba(255,255,255,0.25);border:1.5px solid rgba(255,255,255,0.4);border-radius:50px;padding:10px 16px;cursor:pointer;font-size:20px;transition:all 0.2s;}
    .mbtn:hover{transform:scale(1.14);background:rgba(255,255,255,0.4);}
    .mbtn.sel{background:rgba(255,255,255,0.45);border-color:#fff;box-shadow:0 0 0 3px rgba(255,255,255,0.25);transform:scale(1.1);}
    .rbtn{background:rgba(255,255,255,0.22);border:1.5px solid rgba(255,255,255,0.4);border-radius:50px;padding:9px 18px;cursor:pointer;font-size:13px;font-weight:700;color:#fff;font-family:'Nunito',sans-serif;display:flex;align-items:center;gap:6px;transition:all 0.2s;}
    .rbtn:hover,.rbtn.on{background:rgba(255,255,255,0.4);border-color:#fff;transform:translateY(-2px);}

    .g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
    @media(max-width:360px){.g2{grid-template-columns:1fr;}}
    .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
    @media(max-width:400px){.g3{grid-template-columns:repeat(2,1fr);}}

    @keyframes heartbeat{0%,100%{transform:scale(1)}14%{transform:scale(1.38)}28%{transform:scale(1)}42%{transform:scale(1.22)}}
    .hbeat{animation:heartbeat 1.5s ease-in-out infinite;}
    @keyframes spin{to{transform:rotate(360deg);}}
    .spin{animation:spin 9s linear infinite;}
    @keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
    .shimmer{background:linear-gradient(90deg,#fff 0%,#FFD6EC 30%,#E879F9 60%,#fff 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3.5s linear infinite;}
    @keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
    .slu{animation:slideUp 0.45s ease forwards;}
    .cursor{border-right:2px solid rgba(255,255,255,0.9);animation:blink 0.75s step-end infinite;}
    @keyframes blink{50%{border-color:transparent;}}
    ::-webkit-scrollbar{width:5px;}
    ::-webkit-scrollbar-track{background:rgba(255,255,255,0.1);}
    ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.4);border-radius:3px;}
  `}</style>
);

export default GlobalStyles;