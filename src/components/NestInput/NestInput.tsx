import React from 'react'
import styled from 'styled-components'
import debounce from 'debounce'

export interface InputProps {
	endAdornment?: React.ReactNode
	placeholder?: string
	startAdornment?: React.ReactNode
	value: string
	onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const NestInput: React.FC<InputProps> = ({
	endAdornment,
	placeholder,
	startAdornment,
	value,
	onChange,
}) => {
	return (
		<StyledInputWrapper>
			{!!startAdornment && startAdornment}
			<StyledInput
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{!!endAdornment && endAdornment}
		</StyledInputWrapper>
	)
}

const StyledInputWrapper = styled.div`
	align-items: center;
	background-color: ${(props) => props.theme.color.grey[200]};
	border-radius: ${(props) => props.theme.borderRadius}px;
	box-shadow: inset 4px 4px 8px ${(props) => props.theme.color.grey[300]},
		inset -6px -6px 12px ${(props) => props.theme.color.grey[100]};
	display: flex;
	height: 72px;
	padding: 0 ${(props) => props.theme.spacing[3]}px;
`

const StyledInput = styled.input`
	background: none;
	border: 0;
	color: ${(props) => props.theme.color.grey[600]};
	font-size: 18px;
	flex: 1;
	height: 56px;
	margin: 0;
	padding: 0;
	outline: none;
`

export default NestInput