(function(){"use strict";var t={1131:function(t,e,n){var o=n(9242),i=n(3396),l=n.p+"img/nexon.eff39de9.png";const s={class:"testApp"},a={key:0},u=(0,i._)("img",{src:l,style:{width:"250px"}},null,-1),A=(0,i._)("h1",{style:{"margin-top":"0px"}},"넥슨테스트",-1),r=(0,i._)("p",{style:{"margin-top":"0px"}},'"넥슨 게임에 대해 얼마나 알고있나요?"',-1),c=(0,i._)("hr",{style:{"margin-left":"50px","margin-right":"50px","margin-bottom":"20px"}},null,-1),g=[u,A,r,c];function d(t,e,n,o,l,u){const A=(0,i.up)("BeforeTest"),r=(0,i.up)("MainCompoent"),c=(0,i.up)("TestComponent"),d=(0,i.up)("ResultComponent");return(0,i.wg)(),(0,i.iD)("div",s,[1!==t.$store.state.page&&3!==t.$store.state.page?((0,i.wg)(),(0,i.iD)("div",a,g)):(0,i.kq)("",!0),3==t.$store.state.page?((0,i.wg)(),(0,i.j4)(A,{key:1})):(0,i.kq)("",!0),0==t.$store.state.page?((0,i.wg)(),(0,i.j4)(r,{key:2})):(0,i.kq)("",!0),1==t.$store.state.page?((0,i.wg)(),(0,i.j4)(c,{key:3})):(0,i.kq)("",!0),2==t.$store.state.page?((0,i.wg)(),(0,i.j4)(d,{key:4})):(0,i.kq)("",!0)])}n(7658);const p=(0,i._)("br",null,null,-1),k=(0,i._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/nexontest",style:{display:"none"}},null,-1),b=(0,i._)("br",null,null,-1),h=(0,i._)("a",{style:{"text-decoration":"none",color:"black"},href:"https://colabear92.github.io/"},[(0,i._)("button",{class:"main-button2"},"다른 테스트도 하고싶다면?")],-1);function w(t,e,n,o,l,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("button",{onClick:e[0]||(e[0]=e=>t.$store.commit("changePage",3)),class:"main-button"},"테스트 시작하기"),p,(0,i._)("button",{class:"kakao-share",onClick:e[1]||(e[1]=(...t)=>s.kakaoShare&&s.kakaoShare(...t))},"카카오공유"),(0,i.Uk)("  "),k,(0,i._)("button",{class:"main-button",onClick:e[2]||(e[2]=(...t)=>s.urlCopy&&s.urlCopy(...t))},"🔗링크 복사"),b,h])}var m={name:"MainComponent",props:{page:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93469,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}},C=n(89);const x=(0,C.Z)(m,[["render",w]]);var B=x,y=n(7139),q=n.p+"img/colabear.628ffe0a.jpeg",D=n.p+"media/baram.10d0e8ff.mp3";const f={key:0},I=(0,i._)("img",{src:l,style:{width:"150px"}},null,-1),v={key:0},R={style:{"margin-top":"0px"}},E={style:{"font-size":"120%"}},G=(0,i._)("br",null,null,-1),j=(0,i._)("br",null,null,-1),M={key:1},H=(0,i._)("img",{src:l,style:{width:"150px"}},null,-1),Q=(0,i._)("h2",null,"테스트가 끝났습니다!",-1),U=(0,i._)("p",null,"수고 많으셨어요! 결과를 확인해 볼까요?",-1),T=(0,i._)("img",{src:q,style:{width:"100px"}},null,-1),F=(0,i._)("br",null,null,-1),Y=(0,i._)("audio",{autoplay:""},[(0,i._)("source",{src:D,type:"audio/mpeg"}),(0,i.Uk)(" 이 문장은 여러분의 브라우저가 audio 태그를 지원하지 않을 때 화면에 표시됩니다! ")],-1);function S(t,e,n,o,l,s){const a=(0,i.up)("QuestionNum1");return(0,i.wg)(),(0,i.iD)("div",null,[t.$store.state.questionPage<21?((0,i.wg)(),(0,i.iD)("div",f,[I,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.$store.state.questionList,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},[t.$store.state.questionPage===e.id+1?((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("h2",R,(0,y.zw)(t.$store.state.questionPage)+" / 20",1),(0,i._)("strong",E,"["+(0,y.zw)(e.q)+"]",1),G,j,(0,i.Wm)(a,{question:e},null,8,["question"])])):(0,i.kq)("",!0)])))),128))])):(0,i.kq)("",!0),21==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",M,[H,Q,U,T,F,Y,(0,i._)("button",{class:"main-button",onClick:e[0]||(e[0]=e=>t.$store.commit("changePage",2))},"테스트 결과 보러가기")])):(0,i.kq)("",!0)])}var O=n.p+"media/crazy.58e21975.mp3",P=n.p+"img/hj14.88c2380c.png",_=n.p+"media/earth.6f5f276d.mp3",z=n.p+"img/mush.875a1e24.gif",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACuCAYAAAAcRB70AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAPrElEQVR4nO3djZXiIBAAYFpIC7RgC7SQFtLCtmALtnAt2IItbAu2kHtoWCeTGf4hJMJ7PG/PqGvyOTNA4grxhW0WYgjporfztlAMHcrJW04Qc48o52g1UMw97Ryr7YFi7kjab3ujmDuS9treCOYOpM2WePBkYB86koO0SiBkLih776+vaTuBkKlI9t5vp28NwZAxSPbef6dtDaKQMUj23o+na4VgXDy7zAlk7315upYRhS+ISwKUDuRAMFJBXCKQdCBfCuPiiaQD2RFHDhTK0S8lgRTdeWduCVEjFUQsFNmBHBdGLAoVgCQYSI39eaqWGUYuFKoD+S4Yo6WrBCS9/qgMY0iF8X6JdbcBEdttfYH09NJw1CCjhH6JYekuIALcDx/TgZwcBuwUEIxiWOPgUk5yetljvx+iZUonbF2hX0IO784c9El3g0IS2yJEPkB6emkdhg8OAwRuJ8G2TPqJBdInxzLA8MXhHIngg05FhYCoMVqA9PRyJBhLZ6MChWPgU08MkB49GkknGxSwnnDhsN03f56rAzlg1GBhwGKTG6ZCHGI73F09V08vJ4Kx9B/98uNlmJX8IMA4BgLKTD9fTy8NwnDhIGH44tC3Sr47wKEf34EcYLU1NGq8YFBAcGpx4PjxAJJ97uP0E2QeMIYaMAyO0D6vn6N6ejktkIwwLjlgmKgB+7D8v+54PkRscYQCybJyeyognihypRMnjFmIK7duwnXxhnFlnq96ejkFksowRh8YpuPoYSCYyGFqDfmJGldPIDnSy3mBBKAIgZGaTq4cDipaWHBcM0ePZCCHQVIJhkqBYXBACLDmwGDEFkduIDIHkKaR7ARjjIGBC1KIAaaVgcdxrZRejg0kE4oaMG5cMWogUAtugz+QUuklGEgTSBqCgXFsooWZ2MLDVAyCul+CtZYAILmW9o8XRSrDUCkwYAoxBxtDgfUH3lZu5zxKpZfsQKojyYSiBIzNkJU64BQAgwPXIzIcSEh6iQXSXhTJGC1iYQTVGVTU4A48jBwQiBx2A3KcNFM4jVSHQUUNiGNEk2FUKnJMkIWklxQg+8+JFIwWMTAmn5EJPNi5cCj/CbIpI5CsUeSrYUAccDGtAo7rzkC8kbQCIwRFFhgpOMz2oz+OW8LsKQekShQ5EowxF4xcOEa0fG/B8V1AGofxY4MxC/EvV+RQzNwIgoFxxAApgaQMkEZGJFEwOBzUHAZegLPNcyg7jsMC2RuGqgkD4zAHFdcScD2FSikjqjsIHP8KAYlBUgdIAg4rjGWH5kgjVhgYCDfpRf2bqy/kdn4DvlYqEK8oAvZfdiC7wgBvrgqMWYg7PoscpxO4ZG+rSaQbR0kgI4FjHyClYFhwFIGBcdiKUPhvDoRcw3g9f20gCEfs2kwcjsio4Q0D4ZhKpRLwWn9AcN1ARQ5umlz644gB4o0EvK8UIHHRI1PUIAtPhCM7DNs1J9RBh+eK+kYOsYZRHYgFRzYgtaMGfmMuFFEwqO/6wjhsBamt+BT8hU4pQHzTzB8S9AFLAZIVRxIMC46sMLhv7KGAuEYrEsHAF1dnSjFBUYRIzXWiRwYcVhjDMGAcLhQ+NcarpnCd/0khseGwRQuRDiQ6zaD9mAokC44sUQPhCI0WLAydDvABo4BQ3+DjQiDqAnGmGU8cKjV6VIsaHjiiYBgc5uC8Ck6wUEZFkZ9xmB9X+eoGh/nZdF88MrxQTQbC4EgB4o4egThcUYOFsbypkOlwFobBoae4IQ4OiIbx/KdWCPSt/j/TKSADk6qY6fQcIxk2zfz9Xn5AiuNIjRqTA0cSDHiWlwuIxvF7v7IwfC+sHsJw5KxDXDiyAimBYwzA4Sw+l+03MGDUwDgwEAjDRA/cX0PZ5TG645/V8n/w2ha8MLf8ro8QIMtjvIFUx5GYUqxRw4LDCwbAcedwUKMMiETfGhwGiL7FMLhhrkTgzPNT53uEAgHv0QsIgcN14lBaaimJw7wRBw4ylYDtqR39MDjgJ5fqMGoYIDYcXNEpwf1wSR9uB3B4AWFwsEAgjozRowoONqVI+SnyljfE4SDXRzAMCodtAosCAnHAx9jmSMTSIQxT++DX9AGCtrcCWaGV0hY9quBIqTcmTxxk8WnBYT6Vf0C4VVd4oCEQDgc3OhGWjl8X3+8CUghHttSSgkMl4rCmEwLHg+i/8CBxEYAComHon2F0cU3DS8sVc1xqswEhtmWBOHBMp8FB7Ij1Wsm6RmFhQBwcDHX5THiZ1GK6iR4QCfXVDAPAgU8+tkUOFxBYQyzb4WHuBkYEDlUDR1C9URMHhIEnvzAOg0HfrnY4M6sqiW80poB44HhE4LidDcfkgwMBYXGgnbuCAXGY22m8rA60xiEsOHBaMI+Rgx2Iqwi2/P4rGASOFRDq+RJxXI6E418gjhcK6hO+nZv4RA1X5MBpRRFAfFZscWraCcd4KBz4gIMDvxmlWLZd4YAQTMTQt/DfoThw9JCWTqUh/TiIkhphbV5vnUb/cHDbngKHmbix4YBAbDDITxABw9ziqBGCAwOZiOeHtyZKQRgYhzPaoOhh2+6rcHCfIp/wDSMFPnBw28vl/bMvDoHSCQcDph8MI6SH7B+Tph0nJFctSGUsDlvdQb35UCAGCZVKNArTQw+YQM8Nn5/CAdPKzjiqj1aaxAGB4MLRoBjH8dVTgUxMOqFGRmfHMeTAEZpaYnBQnYIRi0Og9IKHy6k4fN8zgoFPI8xab7xwBJ7PETRDmoKD29Z1PwUD4ogBIonTAXzXYHx+3xZxxJzsE12Uuoa0rp3F7cBZiKfu8GTjnF0xM6C+i3O+76vjiIge1I6DM6QQhj5QcOU1plOnDirHFLljdvQXD2Wp9+faL+bD1XLkqFp3OFCsFt4gDHiA9c/z80F2anv2NEK5XcPxmDY3vyc5CVYhasQXoxnOPg+qO0I+JWjWkFxXMTgMjNe2oOmfKSAwUuDHwMeK5fE4ekAgITDgFLot1TRTjNaqO0KihwUGiQMe5L/HEUBw+qAwccAG4npaDxgUDnZVNhJGuZRSG4erMPVYrl/BgAdZ395ut3ma9EuK+fmcX91sBzt8TbMNfCxsXPTwqTVsOHyAmMiyS0rJXHdYUwuOHlTljmBwZ4FtcJgDzHUOBrv9c97g8okejqhnPV2QG8kgGHVTSuZLFIKih9khxMqkFw5zIH8fT28YPkB+H89Vf/2OzFc1wANJRBAnDmrREcIAi2yxUSM+pdQctXBAHDhIIPBAUgcYXwfLXRcb0pUltSilNgcYAPG6TAHuDweMMueNRuDIGj1sEYS7/JHK35tP6Ty9+uOugjobPe703AeF429YvQAhhuHOi6wdEaN41LDiKFSYkrWHOTfSAYSNHjYYt6vw6hgTB+RJ4CCudPvMu6AIQgAhr5vF+8MTRvmokSG1BEcPDATtFCsQDMMcYHjg1xDmv/u3932QuOqWwY7jcz0NAGJeh4iMq6hB7IOfZqJGwdTiBEIVdVx6cUUMePA/bWJxwMe5gAweOCAQ89zmeV3ppDCM+KixV/Tgrs+wRY83jPVBx5HC3A+7K+1gIA9UxEIczEXUKyA4KvmcROwJI1s6yYUjNHoEA7F8P8dq4oiCYQ7E7ar/T61wYBT3f5MXkAGfs2G5/NJ1lrnnF7jYvhesSNQIwlEwenDFqTeQMBjvxkULPuqsP+3c2ecWHLZh67FhRESPrOnF9u0+sACFB/LTt+nENoylilkI53FX7zPAUKcmwnzmMzxh/DQLo0D0yAIERg264zYFdRyJHhYckx+O3DBcdUYTOHKmF28gaxypjQeCI4pkcEAkxESXLZ3Yvt7JF8Z+UaMCkFAc7+/QAs11RZpP13WDC4p04NDdMQsaU2cUhdEijiQgpuqHB9bWfbfBHQJRyzY3+e6eOGLSSe4CtGzUaBWI64BzOKg/7ucCo9B9HBKf6fGKBWgdGK3VHxAH9TfZ8Lf8cdv5AlNMx0gAjpLpJLkAbRVHTP2xAYIjhw+OnEAkSkEGiG3d5NQwWkove+NQDBBu3aSVia6iMFoB0iIOuY0cqenkeDBaqT98645aOAb72knudLJ/AZoZR1YgMdGjFA4lNzhyRo2264wG0ksUkBo4FPjLkgyO70knOwIhRzC29OJTd6TCUFsctdNJmzBaAOITPXLikGipHn9ZTEtRQ7TQXHpLj2BsQFzRI/NI5RaIY/+zur65QKVwxACRzIKd7uAsr1JF6HFhmJYheuwCJLYoVQsMMDvacRQGonICMQhsQFJhTFscOWuN40eNloe4VIpIiRZqgUEsuu2aUsQRWuUCNRpIDBKx1BfMimzsGV4hOI4bNVoDkhOJWNLIZfDGUS2liKO1AiOYYCC+SHyixTQUx3H+qFF4BBMFBCLB3YViXk5sNhgsOHZJKeLIrSUg3EnLVJ/RtTI2HASQmHM2viOlFKg/UoBQSPBsJnsR1ZwXR2y9ca6UUgHIWBDIDUcXjUHDuKuhBI7vSykHAHItgOOn49gPiKoJRKCUgnGgE4xz1BvfFzkOAOSaAcdPL0bbnwNJAXKNwTHRQGJO7PmOkcoBgFiRCPHBkBnHd86MngmISMMxlRzGirO3yPqjChABYBTG0YvRgwBZLdzdAYTHfWBxMEVpx3HwCEIiMTDuapifv5dXpyKHZcRig9Ejx5GBvL8k5vfVbZGj4zj+LGowEBg57kuHkQMDQZFjSihGe0HaOhBupVYgNBqFTjlEUeqbUjqOo0aQmUg3OGIYHJbo0XGcDMjkg8NEj9eX4+bB0SfAKgNRCUAmG4530fqGweBIjRrfOwnm0wqNYEKBTBgHHMnAuqPjOC8QKxKh/4rC3aSS31VRauZCAA7quXvkaATIJTcQAXBoGBqIgWEih75/AeKCET1S6WklDEcVIGLBgedAInFE1xsdRxtARozDRA0TOWD0QHMdqVGjF6MV0ksOIKPBAVE4JsJCokbHcYAC1QpEgBlSOFJxRA6fqNFx5GwF04vyxfEEMHTX9YbGYa6Yszx/rzcOXH8oGw6zSkut0BogFhxJUaMXo+WiRygQZcOBF+VMWgEjllgYvRg9EBBF4big+gIiScTRo0YFHKFArEjEgkPXFxqG6RgCuBg7a9ToKaVhIGI5Q8yF429bO4yOo1aLxBEERCw4YBEaOCrpMA4WPWxALhgHRFEARk8pBwRy0R19uUsoiCQYvd44AJA5rXcYe7dGgciO4xg4XEBkh3HilgmILBwtnHVGrzXaByIDoIQ8X4dxMiAyU+8wDoKjNpKh42ikNQRk6DCOD2TYC0UvQI8DZEiEEvxae+2b3tKADA4wyc/ZD9D5kAwdxgnb3iDmHjHabh1Fb87Wo0VvztZTSG9ebe41RW8loIgTtP+f1uzTeG+jDAAAAABJRU5ErkJggg==",L=n.p+"img/zakum.4b59dd14.png",W=n.p+"media/secondrun.d8e11129.mp3",X="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhUSEhAVFhUVExgVERIXFhYZFRgVFRUWGBUTFhoYHCggGBslHRUVITEhJykrMC4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0kICYtLS83NzUrLS0tKy0tNjctLSstMystLy0tKy0rLS0tKy0tLS0tLSstLy0tLS0tLS0rN//AABEIAHwAfAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADIQAAIBAwEGBAQGAwEAAAAAAAABAgMRIRIEBTFBUWEGEyJxUoGRoRQyQsHR8IKx8SP/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QAIREBAAIDAAIDAAMAAAAAAAAAAAECAwQREiEFEzEiQXH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAGLhkarVbemHHnJ5S7Pua2vEMxD3qVYxV27I8vxtP40QtqpJL1Sbk+SePdLoRfIVv7xIGfbyUnkRDtTHW367dOtGXBpm6ZXNTji7XzJmybc00pNW4d+WWxi3629WZvg57h2Lg0hJPJsiwie+0dkAGQAAAAAAABB3xXqQp3pq7uk8N2TeXjoiBufa23NL1RTd5rKbS5O52pq+OpEqQhRg9MUk/hSWXi5EzY58vPrrSY5xCjW1Sb73SfG3Q9K9VcbWICxz/kOb/6U188z1NjHDMnm/U1/k182N9GparXtdarcL26G5xmXTjpbrrfpd+vywdNFV2Xb4x2iNH1atCqXxp06rWbvx+RaYO6LzRy+eP8AxA2KeNmwAJzgAAAAAAAAwznb1qpR083lfU6E2VHfe8ZS12stM1GDT/NHqQd/L4YnfWx+V2K+2JYSu+yur92jw82s3lQS52vc12atFptWTv6l37dSRc85a39LeK8QqlFKt5+p3jRcWk+V9TwYrbdrp2c5Rbeqm6bzpcfTGfR34r2JH4dXb63T9nxXscrbt11b6aP5XnjazytK7Wsd8M177aXhK3ZtUXUWu/mKGiMkuMLrMn1uXzY5JxVnyX+kUXZdnjs8YKdpVW023myfGN1wyuBcdzfkv1d/siy0rxGXkIezHa9dAAFwgAAAAAAAAOVvzb1TSgrOc07J49PCTv2vwKjttG9orOhaW3jKLR4l3fSqRVScbygvRLOOfBPqkUpw82WraKjk7PRLTw5pWj3PP/J9tk5K004jx7D0goqN9bUk/TG2Ldb+5vS2yaec9uRGv3zzPGptcIuzln2ZVfs+lhFeOqt5P4V7X+wnvSeNHpzlrr0z/cHI/HQ6/ZkiMtVmuZnswxONtUm5Nt8W7t9W+ZdfDlRtJXxoWO+Ckly8MLH+C/YmaEz99UXbrH1S74APUKYAAAAAAABD3rs/mU2r2xe/HgfMd4bU6M9EHaTV79ueGfWZFI8Z7hdS9RZ6ds3txyVHyWvNuXhP0csVt42UuT1Xk5eq/Q0T+pmNWULRrxvlKM7pKKfNqPG2WelZUE/TtEX1emRTfi67Ey8WZi7NWxb9jSrXpp4qJ97P6GlLzKr00ld3tfHDhfPujHJlnsR7l1937S5y8t5drr7I+k7h2bTBOUbS0pcf02Vip+EvDTupzXB3fv6W+DL9SikrLlgt/jdae/ZaFPvZqz/GG4ALpWgAAAAAAANZs1lBSVmjdgxMRP6K/vLw7CeUuEWku/LmVOPhmnXlO3qlCWioldaZWvZ57o+mWORsW55UdoqVKckqdZupWg03N1npSlGV7RjpVtNivy/H47W7CXj3L1jioR8IQoxnVlB2p05Ty3nQtVuPYsXhjd9KdClXULebCFVLprjGSXcsco3x9fYibu3bDZ/M8u//AKVXVkm20pSSTUfhj6VhG9NGlLRaGt9q945MpMIpcEboWMk6EafcgAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=",V=n.p+"img/boris.828dc5e2.gif";const N={key:0},Z=(0,i._)("audio",{controls:"",autoplay:""},[(0,i._)("source",{src:O,type:"audio/mpeg"}),(0,i.Uk)(" 이 문장은 여러분의 브라우저가 audio 태그를 지원하지 않을 때 화면에 표시됩니다! ")],-1),J=[Z],$={key:1},tt=(0,i._)("img",{src:P,style:{width:"150px"}},null,-1),et=[tt],nt={key:2},ot=(0,i._)("audio",{controls:"",autoplay:""},[(0,i._)("source",{src:_,type:"audio/mpeg"}),(0,i.Uk)(" 이 문장은 여러분의 브라우저가 audio 태그를 지원하지 않을 때 화면에 표시됩니다! ")],-1),it=[ot],lt={key:3},st=(0,i._)("img",{src:z,style:{width:"150px"}},null,-1),at=[st],ut={key:4},At=(0,i._)("img",{src:K,style:{width:"100px"}},null,-1),rt=[At],ct={key:5},gt=(0,i._)("img",{src:L,style:{width:"150px"}},null,-1),dt=[gt],pt={key:6},kt=(0,i._)("audio",{controls:"",autoplay:""},[(0,i._)("source",{src:W,type:"audio/mpeg"}),(0,i.Uk)(" 이 문장은 여러분의 브라우저가 audio 태그를 지원하지 않을 때 화면에 표시됩니다! ")],-1),bt=[kt],ht={key:7},wt=(0,i._)("img",{src:X,style:{width:"100px"}},null,-1),mt=[wt],Ct={key:8},xt=(0,i._)("img",{src:V,style:{width:"75px"}},null,-1),Bt=[xt],yt={class:"container"},qt=(0,i._)("div",{class:"footer"},null,-1),Dt={class:"zoom-in-out-box"},ft={style:{margin:"0px"}};function It(t,e,n,o,l,s){return(0,i.wg)(),(0,i.iD)("div",null,[1==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",N,J)):(0,i.kq)("",!0),4==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",$,et)):(0,i.kq)("",!0),6==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",nt,it)):(0,i.kq)("",!0),7==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",lt,at)):(0,i.kq)("",!0),8==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",ut,rt)):(0,i.kq)("",!0),9==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",ct,dt)):(0,i.kq)("",!0),11==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",pt,bt)):(0,i.kq)("",!0),12==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",ht,mt)):(0,i.kq)("",!0),13==t.$store.state.questionPage?((0,i.wg)(),(0,i.iD)("div",Ct,Bt)):(0,i.kq)("",!0),(0,i._)("div",yt,[(0,i._)("div",{class:(0,y.C_)(["qbox left vibration",{btnClick:0==l.btnClick,btnClicka:0==l.btnClicka}]),onClick:e[0]||(e[0]=e=>{t.questionAdd(n.question.a[1]),l.btnClick=!1,l.btnClicka=!1})},(0,y.zw)(n.question.a[0]),3),(0,i._)("div",{class:(0,y.C_)(["qbox right vibration",{btnClick:0==l.btnClick,btnClickb:0==l.btnClickb}]),onClick:e[1]||(e[1]=e=>{t.questionAdd(n.question.b[1]),l.btnClick=!1,l.btnClickb=!1})},(0,y.zw)(n.question.b[0]),3),(0,i._)("div",{class:(0,y.C_)(["qbox left2 vibration",{btnClick:0==l.btnClick,btnClickc:0==l.btnClickc}]),onClick:e[2]||(e[2]=e=>{t.questionAdd(n.question.c[1]),l.btnClick=!1,l.btnClickc=!1})},(0,y.zw)(n.question.c[0]),3),(0,i._)("div",{class:(0,y.C_)(["qbox right2 vibration",{btnClick:0==l.btnClick,btnClickd:0==l.btnClickd}]),onClick:e[3]||(e[3]=e=>{t.questionAdd(n.question.d[1]),l.btnClick=!1,l.btnClickd=!1})},(0,y.zw)(n.question.d[0]),3),qt]),(0,i._)("div",Dt,[(0,i._)("p",ft,(0,y.zw)(l.countDown),1)])])}var vt=n(65),Rt={props:{question:Object},data(){return{test:0,btnClick:!0,btnClicka:!0,btnClickb:!0,btnClickc:!0,btnClickd:!0,countDown:7}},mounted(){let t=7,e=setInterval((()=>{console.log(t--),this.countDown-=1,0==t&&(t=7),21==this.questionPage&&clearInterval(e)}),1e3),n=setTimeout((()=>{console.log("타이머체크"),clearInterval(e),clearTimeout(n),this.nextQuestion()}),8e3)},methods:{...(0,vt.OI)(["nextQuestion","questionAdd"])},computed:{}};const Et=(0,C.Z)(Rt,[["render",It]]);var Gt=Et,jt={name:"TestComponent",components:{QuestionNum1:Gt},props:{},data(){return{questionPage:1}},methods:{nextQuestion(){this.questionPage<21&&(this.questionPage+=1)}}};const Mt=(0,C.Z)(jt,[["render",S]]);var Ht=Mt,Qt=n.p+"img/100.f4852516.jpg",Ut=n.p+"img/95.8d4fbc07.jpg",Tt=n.p+"img/90.60b68817.jpg",Ft=n.p+"img/85.26ade0cc.jpg",Yt=n.p+"img/80.604fb5dc.jpg",St=n.p+"img/70.c8731884.jpg",Ot=n.p+"img/60.b9ae8d65.jpg",Pt=n.p+"img/50.483a2cc5.jpg",_t=n.p+"img/40.9fc36630.jpg",zt=n.p+"img/30.a646e76c.jpg",Kt=n.p+"img/20.1ada9f96.jpg",Lt=n.p+"img/10.e6a56f15.jpg";const Wt={key:0},Xt=(0,i._)("img",{src:Qt,style:{width:"300px"}},null,-1),Vt=(0,i._)("h1",null,"[100점]",-1),Nt=(0,i._)("p",null,'"넥슨 직원도 이정도는 알지 못할걸요? 혹시 정답지를 가지고 있나요..?"',-1),Zt=(0,i._)("p",null,'"당신의 인생, 넥슨게임 그 자체네요! 금트로피를 드려요!"',-1),Jt=[Xt,Vt,Nt,Zt],$t={key:1},te=(0,i._)("img",{src:Ut,style:{width:"300px"}},null,-1),ee=(0,i._)("p",null,'"아주 우수합니다. 넥슨게임 모범생..! 넥슨 게임만 하셨어요?"',-1),ne=(0,i._)("p",null,'"1문제 차이로 안타깝지만 은트로피를 드릴게요!"',-1),oe={key:2},ie=(0,i._)("img",{src:Tt,style:{width:"300px"}},null,-1),le=(0,i._)("p",null,'"이정도면 순위권에 들어요! 넥슨게임 모범생!"',-1),se=(0,i._)("p",null,'"2문제 차이로 동트로피를 드릴게요!"',-1),ae={key:3},ue=(0,i._)("img",{src:Ft,style:{width:"300px"}},null,-1),Ae=(0,i._)("p",null,'"넥슨 게임을 많이 사랑해 주셨군요!"',-1),re=(0,i._)("p",null,'"상당히 많은 넥슨게임 지식을 가지고 계시네요"',-1),ce={key:4},ge=(0,i._)("img",{src:Yt,style:{width:"300px"}},null,-1),de=(0,i._)("p",null,'"그래도 넥슨게임을 많이 즐기셨나봐요"',-1),pe=(0,i._)("p",null,'"이정도면 충분히 넥슨게임에 많은 시간을 바치셨을거에요"',-1),ke={key:5},be=(0,i._)("img",{src:St,style:{width:"300px"}},null,-1),he=(0,i._)("p",null,'"훌룡한 넥슨유저..! 하지만 안해본 게임도 있으신가보네요"',-1),we=(0,i._)("p",null,'"아마도 했던 게임만 계속 즐겨 하신거 같군요..?"',-1),me={key:6},Ce=(0,i._)("img",{src:Ot,style:{width:"300px"}},null,-1),xe=(0,i._)("p",null,'"충분히 훌룡해요!"',-1),Be=(0,i._)("p",null,'"넥슨 게임을 주제로 충분히 대화할만한 수준 입니다."',-1),ye={key:7},qe=(0,i._)("img",{src:Pt,style:{width:"300px"}},null,-1),De=(0,i._)("p",null,'"절반의 지식"',-1),fe=(0,i._)("p",null,'"그래도 절반은 맞추셨어요! 무엇인가에 절반을 아는것도 대단하다고 생각해요"',-1),Ie={key:8},ve=(0,i._)("img",{src:_t,style:{width:"300px"}},null,-1),Re=(0,i._)("p",null,'"평범한 넥슨 유저셨군요"',-1),Ee=(0,i._)("p",null,'"그래도 여러 게임을 해보시긴 해보셨나봐요"',-1),Ge={key:9},je=(0,i._)("img",{src:zt,style:{width:"300px"}},null,-1),Me=(0,i._)("p",null,'"적당히 즐기기만 하셨네요"',-1),He=(0,i._)("p",null,'"게임이 인생의 전부는 아니잖아요?"',-1),Qe={key:10},Ue=(0,i._)("img",{src:Kt,style:{width:"300px"}},null,-1),Te=(0,i._)("p",null,'"한개만 열심히 파셨나요?"',-1),Fe=(0,i._)("p",null,'"대부분은 한가지 게임만 하긴 하죠"',-1),Ye={key:11},Se=(0,i._)("img",{src:Lt,style:{width:"300px"}},null,-1),Oe=(0,i._)("p",null,'"무슨 자신감으로 테스트를 보셨어요?"',-1),Pe=(0,i._)("p",null,'"콜라베어가 실망이커요! 으으...!!"',-1),_e=(0,i._)("br",null,null,-1),ze=(0,i._)("hr",{style:{"margin-left":"50px","margin-right":"50px"}},null,-1),Ke=(0,i._)("br",null,null,-1),Le=(0,i._)("p",null,'"다른 사람에게도 추천해 주고 싶다면?"',-1),We=(0,i._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/nexontest",style:{display:"none"}},null,-1),Xe=(0,i._)("br",null,null,-1),Ve=(0,i._)("a",{style:{"text-decoration":"none",color:"black"},href:"https://colabear92.github.io/"},[(0,i._)("button",{class:"main-button2"},"다른 테스트도 하고싶다면?")],-1);function Ne(t,e,n,o,l,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[20==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",Wt,Jt)):(0,i.kq)("",!0),19==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",$t,[te,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),ee,ne])):(0,i.kq)("",!0),18==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",oe,[ie,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),le,se])):(0,i.kq)("",!0),17==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",ae,[ue,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),Ae,re])):(0,i.kq)("",!0),16==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",ce,[ge,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),de,pe])):(0,i.kq)("",!0),14==t.$store.state.total||15==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",ke,[be,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),he,we])):(0,i.kq)("",!0),12==t.$store.state.total||13==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",me,[Ce,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),xe,Be])):(0,i.kq)("",!0),10==t.$store.state.total||11==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",ye,[qe,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),De,fe])):(0,i.kq)("",!0),8==t.$store.state.total||9==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",Ie,[ve,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),Re,Ee])):(0,i.kq)("",!0),6==t.$store.state.total||7==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",Ge,[je,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),Me,He])):(0,i.kq)("",!0),4==t.$store.state.total||5==t.$store.state.total?((0,i.wg)(),(0,i.iD)("div",Qe,[Ue,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),Te,Fe])):(0,i.kq)("",!0),t.$store.state.total<=3?((0,i.wg)(),(0,i.iD)("div",Ye,[Se,(0,i._)("h1",null,"["+(0,y.zw)(5*t.$store.state.total)+"점]",1),Oe,Pe])):(0,i.kq)("",!0)]),_e,(0,i._)("button",{class:"main-button",onClick:e[0]||(e[0]=e=>t.$store.commit("changePage",0))},"테스트 다시 하기"),ze,Ke,Le,(0,i._)("button",{class:"kakao-share",onClick:e[1]||(e[1]=(...t)=>s.kakaoShare&&s.kakaoShare(...t))},"카카오 공유"),(0,i.Uk)("  "),We,(0,i._)("button",{class:"main-button",onClick:e[2]||(e[2]=(...t)=>s.urlCopy&&s.urlCopy(...t))},"🔗링크 복사"),Xe,Ve])}var Ze={data(){return{testurl:"dd"}},name:"ResultComponent",props:{},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93469,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}};const Je=(0,C.Z)(Ze,[["render",Ne]]);var $e=Je,tn=n.p+"img/teacher.cba075af.jpeg";const en=(0,i._)("img",{src:l,style:{width:"150px"}},null,-1),nn=(0,i._)("h2",null,"[테스트 관련 사항]",-1),on=(0,i._)("p",null,[(0,i.Uk)('본 테스트는 총 20문제로 이루어져 있고 문항당 7초의 시간이 주어집니다. 각 문제들은 "콜라베어92"가 생각하기에 출제하기 용이하고, 추억이 담겨있는 크레이지아케이드, 메이플스토리, 바람의나라, 테일즈위버에서 출제되었음을 알립니다. 결과에 따라 12개의 콜라베어가 나타납니다. '),(0,i._)("br"),(0,i._)("u",{style:{color:"red"}},"주의:테스트중 소리(음악)가 나올 수 있습니다.")],-1),ln=(0,i._)("p",null,[(0,i.Uk)("본 테스트는 넥슨의 "),(0,i._)("a",{href:"https://member.nexon.com/policy/gameipguide.aspx"},'"게임IP사용 가이드 2021-06-22"'),(0,i.Uk)("를 준수합니다. 콜라베어92는 한푼도 가져가지 못합니다. ")],-1),sn=(0,i._)("img",{src:tn,style:{width:"150px"}},null,-1),an=(0,i._)("br",null,null,-1);function un(t,e,n,o,l,s){return(0,i.wg)(),(0,i.iD)("div",null,[en,nn,on,ln,sn,an,(0,i._)("button",{onClick:e[0]||(e[0]=e=>t.$store.commit("changePage",1)),class:"main-button"},"테스트 시작하기")])}var An={};const rn=(0,C.Z)(An,[["render",un]]);var cn=rn,gn=[{a:["바람의나라",0],b:["카트라이더",0],c:["메이플스토리",0],d:["크레이지아케이드",1],q:"어떤 게임의 로그인 화면 음악일까?",sub:"크레이지아케이드",id:0},{a:["배찌",0],b:["다오",0],c:["케피",0],d:["마리드",1],q:"크아 풍선 2개로 시작하는 캐릭터는?",sub:"크레이지아케이드",id:1},{a:["다오",1],b:["디지니",0],c:["우니",0],d:["모스",0],q:"크아 최고 풍선수 1위 캐릭터는?",sub:"크레이지아케이드",id:2},{a:["팩토리7",0],b:["빌리지13",0],c:["해적9",0],d:["해적14",1],q:"크레이지 아케이드 국민맵은?",sub:"크레이지아케이드",id:3},{a:["루디",0],b:["루니",0],c:["루팡",0],d:["루찌",1],q:"크레이지 아케이드 화폐 이름은?",sub:"크레이지아케이드",id:4},{a:["슬리피우드",0],b:["커닝시티",0],c:["지구방위본부",1],d:["루디브리엄",0],q:"지금 나오고 있는 음악은?",sub:"메이플스토리",id:5},{a:["주황버섯",1],b:["스포어",0],c:["스모어",0],d:["머쉬룸",0],q:"사진속 몬스터 이름은?",sub:"메이플스토리",id:6},{a:["다크아칸",0],b:["다크소울",0],c:["다크템플러",0],d:["다크로드",1],q:"사진에 보이는 이녀석의 이름은?",sub:"메이플스토리",id:7},{a:["아쿰",0],b:["마쿰",0],c:["자쿰",1],d:["다쿰",0],q:"사진속 보스몬스터의 이름은?",sub:"메이플스토리",id:8},{a:["빅토리아 아일랜드",0],b:["메이플 아일랜드",1],c:["에레브",0],d:["리엔",0],q:"처음 시작하는 대륙의 이름은?",sub:"메이플스토리",id:9},{a:["First Run",0],b:["Second Run",1],c:["Third Run",0],d:["Tales Run",0],q:"지금 나오고 있는 음악 이름은?",sub:"테일즈위버",id:10},{a:["젤라비",0],b:["삐약이",0],c:["젤리삐",1],d:["슬라임",0],q:"사진속 몬스터 이름은?",sub:"테일즈위버",id:11},{a:["이스핀 샤를",0],b:["루시안 칼츠",0],c:["막시민 리프크네",0],d:["보리스 진네만",1],q:"사진속 캐릭터 이름은?",sub:"테일즈위버",id:12},{a:["아노마라드",0],b:["오를란느",1],c:["산스루리아",0],d:["렘므",0],q:"이스핀 샤를의 출신 왕국은?",sub:"테일즈위버",id:13},{a:["눈의 아이들",0],b:["룬의 아이들",1],c:["신의 아이들",0],d:["원작 없음",0],q:"테일즈위버 원작 소설은?",sub:"테일즈위버",id:14},{a:["201개",1],b:["128개",0],c:["199개",0],d:["256개",0],q:"바람의나라 도토리는 최대 몇개 가질수 있는가?",sub:"바람의나라",id:15},{a:["Z",0],b:["R",1],c:["S",0],d:["Q",0],q:"바람의나라에서 말에 올라타는 단축키는?",sub:"바람의나라",id:16},{a:["비영사방문",0],b:["비영사천문",1],c:["비영사황신",0],d:["비영사도문",0],q:"바람의나라에서  동서남북으로 이동하는 스킬 이름은?",sub:"바람의나라",id:17},{a:["검제",0],b:["검황",1],c:["검성",0],d:["검천",0],q:"바람의나라 전사 3차 전직 이름은?",sub:"바람의나라",id:18},{a:["19900원",0],b:["20000원",0],c:["39900원",0],d:["49500원",1],q:"바람의나라 초기 정액제 가격은?",sub:"바람의나라",id:19}],dn={name:"App",components:{MainCompoent:B,TestComponent:Ht,ResultComponent:$e,BeforeTest:cn},data(){return{page:0,question:[],questionList:gn,total:0}},methods:{questionAdd(t){this.question.push(t),console.log(this.question),this.total+=t,console.log(this.total)}}};const pn=(0,C.Z)(dn,[["render",d]]);var kn=pn;const bn=(0,vt.MT)({state(){return{name:"kimjiwon",age:20,page:0,question:[],questionList:gn,total:0,btnClick:!0,questionPage:1}},mutations:{addAge(t){t.age++},questionAdd(t,e){t.total+=e,console.log("총점수",t.total)},changePage(t,e){t.page=e,0==e&&(t.question=[],t.total=0,t.questionPage=1,console.log("=====다시하기===="))},nextQuestion(t){t.questionPage<21&&(t.questionPage+=1)}}});var hn=bn;const wn="850444e7b4214546717b77d9cad4218d";window.Kakao.init(wn),(0,o.ri)(kn).use(hn).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var l=e[o]={exports:{}};return t[o](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,l){if(!o){var s=1/0;for(r=0;r<t.length;r++){o=t[r][0],i=t[r][1],l=t[r][2];for(var a=!0,u=0;u<o.length;u++)(!1&l||s>=l)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,l<s&&(s=l));if(a){t.splice(r--,1);var A=i();void 0!==A&&(e=A)}}return e}l=l||0;for(var r=t.length;r>0&&t[r-1][2]>l;r--)t[r]=t[r-1];t[r]=[o,i,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/nexontest/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,l,s=o[0],a=o[1],u=o[2],A=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var r=u(n)}for(e&&e(o);A<s.length;A++)l=s[A],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(r)},o=self["webpackChunkbasic"]=self["webpackChunkbasic"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1131)}));o=n.O(o)})();
//# sourceMappingURL=app.21b2c32b.js.map