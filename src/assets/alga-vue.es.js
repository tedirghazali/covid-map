import{ref as e,computed as a}from"vue";import{date as u,number as l}from"alga-js";function t(l=null,t=null,n=null,v={value:"en-US"},r={value:"short"}){const o=e(0),s=e(0),m=e(0);o.value=null!==l&&0!==l.value?l.value:Number((new Date).getFullYear()),s.value=null!==t&&0!==t.value?t.value:Number((new Date).getMonth())+1,m.value=null!==n&&0!==n.value?n.value:Number((new Date).getDate());const D=a((()=>u.days(v.value,r.value))),b=a((()=>{const e=Number(new Date(o.value,Number(s.value)-1,1).getDay());let a=[];if(e>0){for(let l=Number(u.daysInMonth(o.value,Number(s.value)-1))-(e-1);l<=Number(u.daysInMonth(o.value,Number(s.value)-1));l++)a.push(l)}return a})),f=a((()=>u.daysInMonth(o.value,s.value))),h=a((()=>{const e=Number(new Date(o.value,Number(s.value)-1,Number(u.daysInMonth(o.value,s.value))).getDay());let a=[];if(e<6){const u=6-e;for(let e=1;e<=u;e++)a.push(e)}return a})),N=Number(new Date(o.value,Number(s.value)-1,m.value).getDay()),y=a((()=>{let e=[];if(N>0){const a=N+1;for(let l=1;l<a;l++)e.push(u.subtractDate(new Date(o.value,Number(s.value)-1,m.value),l).valueOf())}return e})),c=a((()=>{let e=[];if(N<6){const a=6-N;for(let l=1;l<=a;l++)e.push(u.subtractDate(new Date(o.value,Number(s.value)-1,m.value),l).valueOf())}return e}));return{setYearRef:o,setMonthRef:s,setDayRef:m,weekDays:D,prevDays:b,monthDays:f,nextDays:h,beforeDays:y,afterDays:c}}function n(t=null,n=null,v={value:"en-US"},r={value:"short"}){const o=e(0),s=e(0);o.value=null!==t&&0!==t.value?t.value:Number((new Date).getFullYear()),s.value=null!==n&&0!==n.value?n.value:Number((new Date).getMonth())+1;const m=e(0),D=e(0),b=a((()=>{const e=0!==m.value?m.value:1980,a=0!==D.value?D.value:Number((new Date).getFullYear())+5;return l.loop(e,a)})),f=u.months();return{setYearRef:o,setMonthRef:s,startYear:m,endYear:D,getRangeYears:b,getMonthNames:f,handleMonthControl:e=>{let a=1;"prev"===e?s.value>1&&s.value<=12?a=s.value-1:1===s.value&&(a=12,o.value=o.value-1):"next"===e&&(s.value>=1&&s.value<12?a=s.value+1:12===s.value&&(a=1,o.value=o.value+1)),s.value=a},handleYearControl:e=>{"prev"===e?o.value=o.value-1:"next"===e&&(o.value=o.value+1)}}}export{n as handleCalendar,t as useCalendar};
