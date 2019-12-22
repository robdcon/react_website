import React, { Component } from 'react';

const TypeForm = () => 
{
    return(
        <div>
        {`<div class="typeform-widget" data-url="https://robconnolly.typeform.com/to/fI0Jbg" data-transparency="50" data-hide-headers=true data-hide-footer=true style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> </div>`}
        </div>
    )
}

export default TypeForm