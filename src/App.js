import React, { useState } from 'react'
import './App.css';

export default function App() {

  const [words,setWords] = useState('')
  const noNoWords = [". ", "! ", "?", ", ", "\n", "!", "\r", '.' ]
  const [containerStates, setContainerStates] = useState({})

  const mostFrequentContext = (context) =>{
    var shortList = {}
    var mfcw = ['',0]
    context.map(pair=>{
      if(!shortList[pair[0]]){
        shortList[pair[0]] = 1
      }
      else{
        shortList[pair[0]]+=1
      }
      if(!shortList[pair[1]]){
        shortList[pair[1]] = 1
      }
      else{
        shortList[pair[1]]+=1
      }
      return null
    })
    Object.keys(shortList).map(word=>{
      if(shortList[word]>mfcw[1]&&word!==''){
        mfcw[0]=word
        mfcw[1]=shortList[word]
      }
      return null
    }
    )
    return mfcw[0]
  }
  
  
  
  const ContextWords = ({context, lr}) =>{
    var left = {}
    var right = {}
    context.map(pair=>{
      if(left[pair[0]]){
        left[pair[0]] = left[pair[0]] + 1
      }
      else{
        left[pair[0]]=1
      }
      if(right[pair[1]]){
        right[pair[1]] = right[pair[1]] + 1
      }
      else{
        right[pair[1]]=1
      }
      return null
    })
    if(lr==='l'){
      return (
        <table style = {{width:'30vw'}}>
          <tr>
            <td><p style={{fontWeight:'bold', textDecorationLine:'underline'}}>L. Context Word</p></td>
            <td><p style={{fontWeight:'bold', textDecorationLine:'underline'}}>Frequency</p></td>
          </tr>
            {Object.keys(left).map(word=>{
              if(word!==''){
                return(
                  <tr>
                  <td>{word}</td>
                  <td>{left[word]}</td>
                  </tr>
                )
              }
              else{
                return null
              }
              })
            }
        </table>
      )
    }
    else{
      return (
        <table style = {{width:'30vw'}}>
          <tr>
            <td><p style={{fontWeight:'bold', textDecorationLine:'underline'}}>R. Context Word</p></td>
            <td><p style={{fontWeight:'bold', textDecorationLine:'underline'}}>Frequency</p></td>
          </tr>
            {Object.keys(right).map(word=>{
              if(word!==''){
                return(
                  <tr>
                  <td>{word}</td>
                  <td>{right[word]}</td>
                  </tr>
                )
              }
              else{
                return null
              }
              })
            }
        </table>
      )
    }
    
      
    
  }
  
  
  
  const ListAllWords = ({allWords, tempContainerStates}) =>{
    
    var backgroundColor = 'lightblue'
    return allWords.map(word=>{
      if(word[0]!==""){
        backgroundColor = backgroundColor ==='lightblue' ? 'lightcyan' : 'lightblue'
        return <tr><td>
          <div style = {{cursor:'pointer', margin:0, backgroundColor:backgroundColor, borderStyle:'solid', height:'8vh', width:'90vw'}} onClick={()=>{setContainerStates(()=> {const tempContainerStates = {...containerStates}; tempContainerStates[word] = tempContainerStates[word]==='null'? 'none' : 'null'; return tempContainerStates})}}>
            <p style={{fontSize:'5vh', margin:0}}>
              {word[0]}
            </p>
          </div>
          <div style = {{height:'50vh', backgroundColor:backgroundColor, borderStyle:'solid', display:containerStates[word]?containerStates[word]:'none'}} >
            <table style = {{width:'40vw'}}>
              <tr>
              <td>
                  <div style = {{backgroundColor:'white', width:'30vw', height:'45vh', position:'absolute', marginLeft:'0vw', marginTop:'-19vh', fontSize:'2vw', overflowY:'auto'}}>                 
                  <ContextWords context = {word[2]} lr = 'l'/>
                  </div>
                </td>
                <td>
                  <div style={{textAlign:'center', width:'30vw', marginLeft:'29vw'}}>
                  <h5 style = {{fontSize:'2.5vh', marginTop:'3vh', marginBottom:'1vh'}}>Number of Occurrences</h5>
                  <h6 style = {{fontSize:'4vh', margin:0}}>{word[1]}</h6>
                  <h5 style = {{fontSize:'2.5vh', marginTop:'15vh', marginBottom:'1vh'}}>Most Frequent Context Word</h5>
                  <h6 style = {{fontSize:'4vh', margin:0}}>{mostFrequentContext(word[2])}</h6>
                  </div>
                </td>
                <td>
                  <div style = {{backgroundColor:'white', width:'30vw', height:'45vh', position:'absolute', marginLeft:'-1vw', marginTop:'-19vh', fontSize:'2vw', overflowY:'auto'}}>                 
                  <ContextWords context = {word[2]} lr = 'r'/>
                  </div>
                </td>
              </tr>
              
            </table>
          </div>
          </td></tr>
      }
      else{
        return null
      }
    })
  }
  
  
  function sortWords(){
    if (words!==''){
      var tempWords = words
      var wordAmounts= {}
      var wordContext = {}
      var allWords = []
      const tempContainerStates = {...containerStates}
      noNoWords.map(nonoWord=>{
        tempWords = tempWords.replaceAll(nonoWord, ' ')
        return null
      })
      const splitWords = tempWords.split(' ')
      var key = 0
      splitWords.map(word=>{
        if (wordAmounts[word.toLowerCase()]){
          wordAmounts[word.toLowerCase()] = parseInt(wordAmounts[word.toLowerCase()]) + 1
        }
        else{
          wordAmounts[word.toLowerCase()] = 1
        }
        if(wordContext[word.toLowerCase()]){
          wordContext[word.toLowerCase()].push([splitWords[key-1], splitWords[key+1]])
        }
        else{
          wordContext[word.toLowerCase()] = [[splitWords[key-1], splitWords[key+1]]]
        }
        key++
        return null
      })
      Object.keys(wordAmounts).map(word=>{
  
        if(!noNoWords.includes(word)){
          allWords.push([word, parseInt(wordAmounts[word]), wordContext[word]])
          tempContainerStates[word] = 'null'
        }
        return null
      })
      // hypothesis as to how the sort function works
      // First, the function has to be made with two dependencies. In this case a and b.
      // The sort function then goes through each item and clasifies it as "a" and the one after it as "b"
      // then it runs your function.
      // If your function returns a positive number, it will flip the positions of the two items in the array.
      // If your function returns a negative number it does nothing to that a,b pair and moves on, making the "b" of the pair just sorted into an "a" and making the following item a "b"
      allWords = allWords.sort(function(a,b){
        return  parseInt(b[1]) - parseInt(a[1])
      })
      console.log(allWords)
      return( 
        <table style = {{width:'90vw', borderStyle:'solid', marginLeft:'4vw'}}>
              <ListAllWords allWords = {allWords} tempContainerStates = {tempContainerStates}/>
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
        setWords(reader.result)
      }
    }
  }

  return (
    <div className="App">
      <div className ='Header' style = {{backgroundColor:'navy', height:'10vh', width:'100%', position:'fixed', top:0, zIndex:3}}>
        <h1 style = {{color:'white', fontSize:'5vh', textAlign:'center', marginTop:'1.5vh'}}>Word Parser!</h1>
      </div>
      <div style = {{textAlign:'center',  marginTop:'15vh'}}>
       <h4>Input a .txt file</h4>
        <input type='file' onChange={(e)=>uploadText(e)}></input>
        <br />
        <br />
        <br />
        <br />
        <h4>Your Parsed Words</h4>
        <p>Click on a word for more details!</p>
        {sortWords()}
      </div>
    </div>
  );
}


