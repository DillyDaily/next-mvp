import { Fragment } from "react"

import { Box } from '@chakra-ui/react'

const Input = (props) => {
    return(
        <Fragment>
            <Box as="label" htmlFor={props.input.id}>{props.label}</Box>
            <Box as="input" {...props.input} />
        </Fragment>
    );
};

export default Input;