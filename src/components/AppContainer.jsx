import Style from '../styles';
import Footer from '../components/Footer';
 
 
const AppContainer = (props) => {
    return (
        <Style.Container>
            {props.children}
            {props.display ? 
            <Footer imageSource={require('../assets/images/post3.png')} /> :
            null
            }
        </Style.Container>
     );
    };
export default AppContainer;