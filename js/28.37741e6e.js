"use strict";(self["webpackChunktest_web"]=self["webpackChunktest_web"]||[]).push([[28],{8028:function(t,s,i){i.r(s),i.d(s,{default:function(){return rt}});var o=i(3396);function r(t,s,i,r,e,l){const n=(0,o.up)("portfolioList"),c=(0,o.up)("partWeb");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n),(0,o.Wm)(c)],64)}const e=t=>((0,o.dD)("data-v-633fca18"),t=t(),(0,o.Cn)(),t),l={id:"portfolioList"},n={class:"container"},c=e((()=>(0,o._)("h1",null,"視覺範本",-1))),a={key:0};function d(t,s,i,r,e,d){const u=(0,o.up)("portfolioItem");return(0,o.wg)(),(0,o.iD)("section",l,[(0,o._)("div",n,[c,""!==e.itemlist?((0,o.wg)(),(0,o.iD)("div",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.itemlist,(s=>((0,o.wg)(),(0,o.j4)(u,{title:s.title,des:s.des,srcstr:s.srcstr,id:s.id,key:t.id},null,8,["title","des","srcstr","id"])))),128))])):(0,o.kq)("",!0)])])}var u=i(4161),p=i(7139),m=i(9242);const _=t=>((0,o.dD)("data-v-1c226d91"),t=t(),(0,o.Cn)(),t),h={class:"row list-Item"},v={class:"portfolioText col-sm-6"},f=_((()=>(0,o._)("span",{class:"forBottomBorder"},"          ",-1))),w={class:"portfolioImg col-sm-6"},g=["src"];function b(t,s,r,e,l,n){return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",v,[(0,o._)("h3",null,(0,p.zw)(r.title),1),f,(0,o._)("p",null,(0,p.zw)(r.des),1),(0,o._)("a",{class:"nav-link scrollto seeMoreBtn",onClick:s[0]||(s[0]=(0,m.iM)((t=>n.toPro()),["prevent"])),href:"#"},"瞭解更多")]),(0,o._)("div",w,[(0,o._)("img",{src:i(5459)(`./${r.srcstr}`)},null,8,g)])])}i(7658);var k={name:"portfolioItem",data(){return{productObj:{title:this.title,des:this.des,srcstr:this.srcstr,id:this.id}}},props:{title:String,des:String,srcstr:String,id:String},methods:{async toPro(){await this.$store.commit("setProduct",this.productObj),this.$router.push({name:"product"})}}},j=i(89);const C=(0,j.Z)(k,[["render",b],["__scopeId","data-v-1c226d91"]]);var P=C,I={name:"portfolioList",data(){return{itemlist:""}},mounted(){let t="portfolioItem.json";u.Z.get(t).then((t=>{this.itemlist=t.data})).catch((t=>{console.log(t)}))},components:{portfolioItem:P}};const D=(0,j.Z)(I,[["render",d],["__scopeId","data-v-633fca18"]]);var O=D,y=i(5509),M=i(3553),W=i(6395);const Z=t=>((0,o.dD)("data-v-3747c770"),t=t(),(0,o.Cn)(),t),B={id:"partWeb"},L={class:"container"},$=Z((()=>(0,o._)("div",{class:"section-title"},[(0,o._)("h2",null,"範本速覽"),(0,o._)("p",null,"多種範本任意挑選，如需進一步客製化請洽詢業務窗口。")],-1))),S={class:"row justify-content-around"},V={class:"web-win col-9 col-sm-6 col-md-4 col-lg-3"},x={class:"img-win"},z=Z((()=>(0,o._)("h3",null,"展場官方網站",-1))),H=Z((()=>(0,o._)("hr",null,null,-1))),Y=Z((()=>(0,o._)("p",null,"內容涵蓋展覽時間表、場地預定表單、購票相關資訊...等。",-1))),q={class:"web-win col-9 col-sm-6 col-md-4 col-lg-3"},K={class:"img-win"},T=Z((()=>(0,o._)("h3",null,"花卉線上商店",-1))),A=Z((()=>(0,o._)("hr",null,null,-1))),E=Z((()=>(0,o._)("p",null,"花卉線上購賣、售後照護諮詢、各品種花卉知識文庫一應俱全。",-1))),F={class:"web-win col-9 col-sm-6 col-md-4 col-lg-3"},G={class:"img-win"},J=Z((()=>(0,o._)("h3",null,"婚禮活動網站",-1))),N=Z((()=>(0,o._)("hr",null,null,-1))),Q=Z((()=>(0,o._)("p",null,"活動宣傳網站，適合短期收名單用途，可搭配社群媒體引流使用。",-1))),R=Z((()=>(0,o._)("div",{class:"seeMoreBox"},[(0,o._)("a",{class:"seeMoreBtn",href:"#"},"觀看更多作品")],-1)));function U(t,s,i,r,e,l){return(0,o.wg)(),(0,o.iD)("section",B,[(0,o._)("div",L,[$,(0,o._)("div",S,[(0,o._)("div",V,[(0,o._)("div",x,[(0,o._)("a",{href:"#",onClick:s[1]||(s[1]=(0,m.iM)((()=>{}),["prevent"]))},[(0,o._)("img",{src:y,onClick:s[0]||(s[0]=t=>l.toPro("artshow"))})])]),z,H,Y]),(0,o._)("div",q,[(0,o._)("div",K,[(0,o._)("a",{href:"#",onClick:s[3]||(s[3]=(0,m.iM)((()=>{}),["prevent"]))},[(0,o._)("img",{src:M,onClick:s[2]||(s[2]=t=>l.toPro("florist"))})])]),T,A,E]),(0,o._)("div",F,[(0,o._)("div",G,[(0,o._)("a",{href:"#",onClick:s[5]||(s[5]=(0,m.iM)((()=>{}),["prevent"]))},[(0,o._)("img",{src:W,onClick:s[4]||(s[4]=t=>l.toPro("wedding"))})])]),J,N,Q])]),R])])}var X={name:"partWeb",data(){return{productObj:{title:"",des:"",srcstr:"",id:""},itemlist:""}},methods:{async toPro(t){await this.payProVal(t),await this.$store.commit("setProduct",this.productObj),this.$router.push({name:"product"})},payProVal(t){const s=this.itemlist.filter((s=>s.id===t))[0];this.productObj.title=s.title,this.productObj.des=s.des,this.productObj.srcstr=s.srcstr,this.productObj.id=s.id}},mounted(){let t="portfolioItem.json";u.Z.get(t).then((t=>{this.itemlist=t.data})).catch((t=>{console.log(t)}))}};const tt=(0,j.Z)(X,[["render",U],["__scopeId","data-v-3747c770"]]);var st=tt,it={name:"ProductListView",components:{portfolioList:O,partWeb:st}};const ot=(0,j.Z)(it,[["render",r]]);var rt=ot}}]);
//# sourceMappingURL=28.37741e6e.js.map