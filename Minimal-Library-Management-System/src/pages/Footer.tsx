
import FooterContact from '../components/footer/FooterContact';
import FooterSummary from '../components/footer/FooterSummary';

const Footer = () => {
    return (
        <div className=''>
             <FooterContact/>
            <div className="text-gray-300 ml-3 mr-3 mt-8">
                 <hr/>
            </div>
             <FooterSummary/>
        </div>
    );
};

export default Footer;