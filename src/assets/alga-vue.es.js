import{ref as e,computed as r}from"vue";import{date as a}from"alga-js";function l(){const l=e(0),t=e(0),n=r((()=>a.calendar(l.value,t.value))),u=r((()=>n.value.slice(0,7))),s=e=>{let r="";return e.includes("-")&&(r=e.split("-")[1]),r};return{setCalendarYear:l,setCalendarMonth:t,getCalendar:n,getDayNames:u,getCalendarMonth:s,filterCalendarDate:(e,r=0)=>{let a="";return a=u.value.includes(e)?0!==r?e.slice(0,r):e:e.split("-")[2],a},isCurrentCalendar:e=>{let r=!1;return(u.value.includes(e)||Number(s(e))===t.value)&&(r=!0),r},isCurrentDate:e=>{let r=!1;return Number(s(e))===t.value&&(r=!0),r},isDayNames:e=>{let r=!1;return u.value.includes(e)&&(r=!0),r}}}export{l as useCalendar};