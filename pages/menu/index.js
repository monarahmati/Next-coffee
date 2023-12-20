import PageHeader from '@/components/modules/pageheader/pageheader';
import Pricing from '@/components/template/Menu/Pricing';
import React from 'react';

const  Menu = ({data}) => {
    return (
        <>
         <PageHeader route="Menu"/>
         <Pricing dataMenu={data.dataMenu}/>
         
        </>
    );
};

export default Menu;



export async function getStaticProps(){

    const resMenu = await fetch('http://localhost:4000/menu')
    const dataMenu = await resMenu.json()


    return{
        props:{
            data:{
                dataMenu: dataMenu,
            }
        }
    }
}

