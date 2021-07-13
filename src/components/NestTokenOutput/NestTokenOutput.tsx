import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import NestInput, { InputProps } from '../NestInput'
import NestOutput from '../NestOutput'
import { fetchCalcToNest } from '../../bao/utils'

interface NestTokenOutputProps extends InputProps {
	symbol: string
	_inputToken?: string
	_outputToken?: string
	value: string
	onChange: (e: React.FormEvent<HTMLInputElement>) => void
	onKeyUp: (e: React.FormEvent<HTMLInputElement>) => void
}

const NestTokenOutput: React.FC<NestTokenOutputProps> = ({
	symbol,
	onChange,
	value,
	_outputToken
}) => {
	
	const nestToMint = _outputToken;

	let ethNeeded

	const fetchNestQuote = async (_outputToken: any, value: any) => {
		try {
		  ethNeeded = (await fetchCalcToNest(_outputToken, value));
		} catch (e) { console.error(e)}
	  }

	return (
		<StyledTokenInput>
				<NestOutput
				startAdornment={
					<StyledTokenAdornmentWrapper>
						<StyledTokenSymbol>MINT</StyledTokenSymbol>
						<StyledSpacer />
					</StyledTokenAdornmentWrapper>
				}
				endAdornment={
					<StyledTokenAdornmentWrapper>
						<StyledTokenSymbol>{symbol}</StyledTokenSymbol>
					</StyledTokenAdornmentWrapper>
				}
				onChange={onChange}
				placeholder="0"
				value={value}
			/>
		</StyledTokenInput>
	)
}

/*
			<div>
			  <Button size="sm" text="Max" />
			</div>
*/

const StyledTokenInput = styled.div``

const StyledSpacer = styled.div`
	width: ${(props) => props.theme.spacing[3]}px;
`

const StyledTokenAdornmentWrapper = styled.div`
	align-items: center;
	display: flex;
`

const StyledMaxText = styled.div`
	align-items: center;
	color: ${(props) => props.theme.color.grey[400]};
	display: flex;
	font-size: 14px;
	font-weight: 700;
	height: 44px;
	justify-content: flex-end;
`

const StyledTokenSymbol = styled.span`
	color: ${(props) => props.theme.color.grey[600]};
	font-weight: 700;
`

export default NestTokenOutput