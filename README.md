# DPLJS
Deep Learning JS
---

***

This project is just a javascript version using [Mathjs)](https://mathjs.org/) to learn the basis of deep learning using classic javascript (ECS6).

The objective is to have a Library to help you create Input, hidden layer, output, launch learning process, and test your machine.

This version will provide a simple number recognition project using a 4x7 pixel
This project provide a Scilab Version (Where the idea came from)

One global object DPLN will be used.

The input can be updated using any kind of Controler in the discretion of the user.

### Example
> DrawApp(JS+CANVAS) => DPLN_SetInput(Number, value)...

> or

> DrawApp(JS+CANVAS) => DPLN_SetInputs(JSON Object)...

> 

> DrawApp(JS+CANVAS) => DPLN_UpdateOutput()...

> ...

> DrawApp(JS+CANVAS) => JSON DPLN_ReadOutput()...


***
## API
***

DPLN (Class)

* LoadModel(JSON Object) : Load a preconfigured model (Input+Layer ready)
* CreateModel(NbInput,NbOutput) : Create a first model (with only one layer initialise with randome value)
* JSON SaveModel() : Save the current model into JSON Object
* AddLayer(NbOutputs) : Add a new layer at the end before the outputs => Final Output number will be updated
* InsertLayer(Position) // The Number Outputs will be automaticaly generated


