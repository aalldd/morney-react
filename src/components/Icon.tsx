import React from 'react';

//require 一个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type IconProps={
  name: string
}
const Icon=(props: IconProps)=>{
  return(
    <svg className="icon">
      <use xlinkHref={'#'+props.name}/>
    </svg>
  )
}

export default Icon
