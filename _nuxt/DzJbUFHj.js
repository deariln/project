import{n as w,r as a,c as h,a as t,p as S,v as _,u as i,q as I,s as B,t as o,F as M,o as C}from"./BvUCkYYB.js";import{u as D}from"./D6aiXO7l.js";const F={class:"container"},R={action:"",class:"form"},U={id:"matrixSVG",viewBox:"0 0 800 800",preserveAspectRatio:"xMidYMid meet"},q={x:"48",y:"406",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},A={x:"392",y:"62",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},E={x:"736",y:"405",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},G={x:"392",y:"750",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},T={x:"392",y:"406",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},H=w({__name:"matrix_year",setup(Y){const u=a("2006-07-31"),d=a("2025"),n=a(""),b=a(""),g=a(""),k=a(""),v=a(""),N=a(""),c=D(),V=()=>{const y=u.value.split("-");y[2],y[1],y[0];let e=d.value.split("").reduce((s,l)=>s+ +l,0);n.value=e.toString();let r=c.shared.dayNum+parseInt(n.value);r>22&&(r=r.toString().split("").reduce((s,l)=>s+ +l,0)),b.value=r.toString();let m=c.shared.monthNum+parseInt(n.value);m>22&&(m=m.toString().split("").reduce((s,l)=>s+ +l,0)),g.value=m.toString();let f=c.shared.yearNum+parseInt(n.value);f>22&&(f=f.toString().split("").reduce((s,l)=>s+ +l,0)),k.value=f.toString();let x=c.shared.fateNum+parseInt(n.value);x>22&&(x=x.toString().split("").reduce((s,l)=>s+ +l,0)),v.value=x.toString();let p=parseInt(b.value)+parseInt(g.value)+parseInt(k.value)+parseInt(v.value);p>22&&(p=p.toString().split("").reduce((s,l)=>s+ +l,0)),N.value=p.toString()};return(y,e)=>(C(),h(M,null,[t("div",F,[t("form",R,[S(t("input",{class:"input-date",type:"date",id:"birthday",name:"birthday","onUpdate:modelValue":e[0]||(e[0]=r=>I(u)?u.value=r:null)},null,512),[[_,i(u)]]),S(t("input",{class:"input-year",type:"number",min:"1900",max:"2099",step:"1",placeholder:"Год","onUpdate:modelValue":e[1]||(e[1]=r=>I(d)?d.value=r:null)},null,512),[[_,i(d)]])])]),t("div",{class:"div-butt_year"},[t("button",{class:"butt-year",onClick:V},"Рассчитать")]),(C(),h("svg",U,[e[2]||(e[2]=B('<line id="line-1-2" x1="56" y1="400" x2="400" y2="56" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-2-3" x1="400" y1="56" x2="744" y2="400" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-3-4" x1="744" y1="400" x2="400" y2="744" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-4-1" x1="400" y1="744" x2="56" y2="400" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-1-5" x1="56" y1="400" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><line id="line-2-5" x1="400" y1="56" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><line id="line-3-5" x1="744" y1="400" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><line id="line-4-5" x1="400" y1="744" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><circle cx="56" cy="400" r="29" class="matrix-circle" style="stroke:rgb(174, 143, 190);fill:rgb(255, 255, 255);"></circle>',9)),t("text",q,o(i(b)),1),e[3]||(e[3]=t("circle",{cx:"400",cy:"56",r:"29",class:"matrix-circle",style:{stroke:"rgb(174, 143, 190)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",A,o(i(g)),1),e[4]||(e[4]=t("circle",{cx:"744",cy:"400",r:"29",class:"matrix-circle",style:{stroke:"rgb(199, 90, 90)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",E,o(i(k)),1),e[5]||(e[5]=t("circle",{cx:"400",cy:"744",r:"29",class:"matrix-circle",style:{stroke:"rgb(199, 90, 90)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",G,o(i(v)),1),e[6]||(e[6]=t("circle",{cx:"400",cy:"400",r:"29",class:"matrix-circle",style:{stroke:"rgb(191, 153, 161)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",T,o(i(N)),1)]))],64))}});export{H as default};
