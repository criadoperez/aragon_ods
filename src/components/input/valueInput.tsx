import React from 'react';
import styled from 'styled-components';

import { ButtonText } from '../button';
import { StyledInput } from './textInput';

export type ValueInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /** Text that appears on the button present on the right side of the input; if no text
     * is provided, the button will not be rendered */
    adornmentText?: string;
    /** Handler for when the button present on the right side of the input  is
     * clicked */
    onAdornmentClick?: () => void;
    /** Changes a input's color schema */
    mode?: 'default' | 'success' | 'warning' | 'critical';
};

export const ValueInput = React.forwardRef<HTMLInputElement, ValueInputProps>(
    ({ mode = 'default', disabled = false, adornmentText = '', ...props }, ref) => (
        <Container data-testid="input-value" {...{ mode, disabled }}>
            <StyledInput
                disabled={disabled}
                {...props}
                ref={ref}
                onWheel={(e) => {
                    e.preventDefault();
                    (e.target as HTMLInputElement).blur();
                }}
            />
            {adornmentText && (
                <ButtonText
                    label={adornmentText}
                    size="small"
                    mode="secondary"
                    bgWhite={true}
                    disabled={disabled}
                    onClick={props.onAdornmentClick}
                />
            )}
        </Container>
    ),
);

ValueInput.displayName = 'ValueInput';

type StyledContainerProps = Pick<ValueInputProps, 'mode' | 'disabled'>;

export const Container = styled.div.attrs(({ mode, disabled }: StyledContainerProps) => {
    let className = `${
        disabled ? 'bg-ui-100 border-ui-200' : 'bg-ui-0'
    } flex items-center space-x-1.5 p-0.75 pl-2 text-ui-600 rounded-xl 
    border-2 focus-within:ring-2 focus-within:ring-primary-500 
    hover:border-ui-300 active:border-primary-500 active:ring-0 `;

    if (mode === 'default') {
        className += 'border-ui-100';
    } else if (mode === 'success') {
        className += 'border-success-600';
    } else if (mode === 'warning') {
        className += 'border-warning-600';
    } else if (mode === 'critical') {
        className += 'border-critical-600';
    }

    return { className };
})<StyledContainerProps>``;
