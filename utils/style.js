import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    navbar:{
        // background-color  red 
        backgroundColor: 'red',
        '& a':{
            color: 'white',
            marginLeft: 10
        }
       },
       main:{
           minHeight:'80vh'
       },
       footer:{
           textAlign:"center"
       }
})
export default useStyle;