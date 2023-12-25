import PageHeader from '@/components/modules/pageheader/pageheader';
import Result from '@/components/template/Search/Result';
import React from 'react';

const Search = ({data}) => {
    return (
        <>
          <PageHeader route="Search" />   
          <Result searchResult={data.searchResult} />
        </>
    );
};




export async function getServerSideProps(context){
  const { query } = context

  const resSearch = await fetch('http://localhost:4000/menu')
  const dataSearch = await resSearch.json()


  const searchResult = dataSearch.filter((item) => (
    item.type.toLowerCase().includes(query.q.toLowerCase()) || item.title.toLowerCase().includes(query.q.toLowerCase())
  ) )

  console.log(searchResult);


  return {
    props :{
      data : {
        searchResult : searchResult,
      }
    }
  }
}
export default Search;

