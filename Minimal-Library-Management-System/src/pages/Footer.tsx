
import FooterContact from '../components/footer/FooterContact';
import FooterSummary from '../components/footer/FooterSummary';

const Footer = () => {
    return (
        <div className='bg-[#FFD66B]'>
             <FooterContact/>
            <div className="text-[#4DA8DA] ml-3 mr-3 mt-6">
                 <hr/>
            </div>
             <FooterSummary/>
        </div>
    );
};

export default Footer;