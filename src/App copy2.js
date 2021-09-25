import React, { useState } from 'react'
import './App.css';

export default function App() {

  const [context,setContext] = useState('')
  const noNoWords = ['a', 'and', 'in', 'as', 'but', 'is', 'are', 'just', 'if', 'on', 'have', 'him','her','be', 'with','or','by', 'one', 'would', 'should', 'could', 'has', 'what', 'you', 'me', 'us', 'we', 'they', 'he', 'she', 'their',  `they're`, 'wants', 'about', 'get', 'also', 'read', 'your', 'knows', 'through', 'sure', 'who', 'what', 'where', 'when', 'why', 'how', 'do', 'not', 'always', 'now', 'project', 'work', 'all', 'my', 'out', 'that', 'his', "it's", 'sometimes', 'then', 'uses', 'projects', 'film', 'production', 'up', 'down', 'person', 'going', 'goes','usually', 'yeah', 'can', 'an', 'shes', 'very', 'from', 'needs', 'find', 'them', 'know', 'doesnt','so', 'over', 'finds', 'others', 'everyone', 'better', 'scene', 'world', 'using', 'interested', 'which', 'different', 'whole', 'go', 'post-production', 'thinks', 'things', '', 'use', 'takes', 'following', 'been', 'working', 'team', '1', '4', 'comes', 'good','everything', 'done', 'this', 'ask', 'someone', 'reaches', 'before', 'see','maybe', 'really', 'our', 'well', 'depends', 'talk', 'together', 'creates', 'think', 'mind', 'pre-production', 'makes', 'other', 'high', 'finding', 'showing', 'to', 'i', 'the', 'of', 'for', 'it', 'its', 'like', 'ive', 'im', 'thats', 'more', 'dont', 'lot', 'thing', 'tend', 'need', 'at', 'was', 'into', 'theres', 'will', 'being', 'way', 'had', 'kind', 'were', 'because', 'having', 'there', 'never', 'cause', 'something','id', 'ill', 'youre', 'same', 'anything', 'havent', 'than', 'right', 'back', 'theyre', 'big', 'come', 'biggest', 'definitely', 'try', 'trying', 'much', 'bit', 'used', 'cant', 'too', 'little', 'huge', 'most', 'great', 'first', 'every', 'still', 'look', 'care', 'happen', 'take', 'got', 'yeah', 'hard', 'couple', 'worked','those']

  function sortWords(){
    if (context!==''){
      var tempContext = context
      var wordAmounts= {}
      var allWords = []
      const splitContext = tempContext.split(' ')
      splitContext.map(word=>{
        if (wordAmounts[word.toLowerCase()]){
          wordAmounts[word.toLowerCase()] = parseInt(wordAmounts[word.toLowerCase()]) + 1
        }
        else{
          wordAmounts[word.toLowerCase()] = 1
        }
        
        return null
      })
      Object.keys(wordAmounts).map(word=>{
  
        if(!noNoWords.includes(word)){
          allWords.push([word, parseInt(wordAmounts[word])])
        }
        return null
      })
      allWords = allWords.sort(function(a,b){
        return  parseInt(b[1]) - parseInt(a[1])
      })
      console.log(allWords)
      return( 
        <table style = {{width:'100%'}}>
          <tr>
            <td>
              {allWords[0][0]} {allWords[0][1]}
              <br />
              {allWords[1][0]} {allWords[1][1]}
              <br />
              {allWords[2][0]} {allWords[2][1]}
              <br />
              {allWords[3][0]} {allWords[3][1]}
              <br />
              {allWords[4][0]} {allWords[4][1]}
              <br />
              {allWords[5][0]} {allWords[5][1]}
              <br />
              {allWords[6][0]} {allWords[6][1]}
              <br />
              {allWords[7][0]} {allWords[7][1]}
              <br />
              {allWords[8][0]} {allWords[8][1]}
              <br />
              {allWords[9][0]} {allWords[9][1]}
              <br />
              {allWords[10][0]} {allWords[10][1]}
              <br />
              {allWords[11][0]} {allWords[11][1]}
              <br />
              {allWords[12][0]} {allWords[12][1]}
              <br />
              {allWords[13][0]} {allWords[13][1]}
              <br />
              {allWords[14][0]} {allWords[14][1]}
              <br />
              {allWords[15][0]} {allWords[15][1]}
              <br />
              {allWords[16][0]} {allWords[16][1]}
              <br />
              {allWords[17][0]} {allWords[17][1]}
              <br />
              {allWords[18][0]} {allWords[18][1]}
              <br />
              {allWords[19][0]} {allWords[19][1]}
            </td>
            <td>
              {allWords[20][0]} {allWords[20][1]}
              <br />
              {allWords[21][0]} {allWords[21][1]}
              <br />
              {allWords[22][0]} {allWords[22][1]}
              <br />
              {allWords[23][0]} {allWords[23][1]}
              <br />
              {allWords[24][0]} {allWords[24][1]}
              <br />
              {allWords[25][0]} {allWords[25][1]}
              <br />
              {allWords[26][0]} {allWords[26][1]}
              <br />
              {allWords[27][0]} {allWords[27][1]}
              <br />
              {allWords[28][0]} {allWords[28][1]}
              <br />
              {allWords[29][0]} {allWords[29][1]}
              <br />
              {allWords[30][0]} {allWords[30][1]}
              <br />
              {allWords[31][0]} {allWords[31][1]}
              <br />
              {allWords[32][0]} {allWords[32][1]}
              <br />
              {allWords[33][0]} {allWords[33][1]}
              <br />
              {allWords[34][0]} {allWords[34][1]}
              <br />
              {allWords[35][0]} {allWords[35][1]}
              <br />
              {allWords[36][0]} {allWords[36][1]}
              <br />
              {allWords[37][0]} {allWords[37][1]}
              <br />
              {allWords[38][0]} {allWords[38][1]}
              <br />
              {allWords[39][0]} {allWords[39][1]}
            </td>
          </tr>
          <p>
          
          </p>
        </table>
        
        
      )
    }
    else{
      return <p>Upload a file to see the most common words!</p>
    }
  }

  function uploadText(e){
    let file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(){
        alert('File successfully uploaded!')
        setContext(reader.result)
      }
    }
  }

  return (
    <div className="App">
      <div style = {{textAlign:'center'}}>
        <h4>Input a .txt file</h4>
        <input type='file' onChange={(e)=>uploadText(e)}></input>
        <br />
        <br />
        <br />
        <br />
        <h4>Most Common Words</h4>
        {sortWords()}
      </div>
    </div>
  );
}


