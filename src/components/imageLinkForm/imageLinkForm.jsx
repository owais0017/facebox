import './imageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

    return (
        <div>
            <p className="f3 white">
            {"This is a magic brain that detects faces. Give it a try"}
            </p>
            <div className=" center">
              <div className=" form center pa4 br3 shadow-5">
                <input onChange={onInputChange} className="f4 wd-70 pa2 center" type="text"/>
                <button onClick={onButtonSubmit} className="w-30 f4 grow link ph3 pv2 dib white bg-light-purple">submit</button>
              </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;