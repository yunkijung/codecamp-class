export default function BoardComponent(props){
    return (
        <>
            <h1>{props.isEdit ? 'Edit' : 'Create'} Page</h1>
            Title : <input type="text"/><br/>
            Content : <input type="text"/><br/>
            <button>{props.isEdit ? 'Edit' : 'Create'}</button>
        </>
    )
}