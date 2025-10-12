const AddTodo = ()=>{
    const [inputText,setInputText] = useState("");
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        e.preventDefault();
        if(inputText == "")return;
        dispatch(addTodoD)
    }
    
}