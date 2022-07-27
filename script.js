var form=document.querySelector('form')
        form.addEventListener('submit', function(event){
          event.preventDefault()
           var name=document.getElementById('name').value
           console.log(name)
           var node=document.getElementById('node').value
           console.log(node)
           var boot=document.getElementById('boot').value
           console.log(boot)
           var chainId=document.getElementById('chainId').value
           console.log(chainId)
           var chainName=document.getElementById('chainName').value
           console.log(chainName)
           var poa=document.getElementById('poa')
           console.log(poa)
           var pos=document.getElementById('pos')
           console.log(pos)
           var gasLimit=document.getElementById('gasLimit').value
           console.log(gasLimit)
        })