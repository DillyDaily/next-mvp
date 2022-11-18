
import { Box } from '@chakra-ui/react'

const Button = (props) => {
    // if (props.link) {
        return(
            <Box
                as="button"
                height='44px'
                width='100%'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                fontSize='16px'
                fontWeight='semibold'
                bg='#fff'
                borderColor='#000'
                borderWidth='1px'
                color = '#000'
                _hover={{ 
                    bg: '#000', 
                    color: '#fff'
                }}
                _active={{
                    bg: '#fff',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
            > 
                {props.btn}
            </Box>
        );
    // };
};

export default Button;