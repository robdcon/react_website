import {css} from 'styled-components'

export const media =
{
	handheld: (...args) => css`

		@media (max-width:800px)
		{
			${css(...args)}
		}

	`
}
//import media from '../utils/media
//${media.handheld`width:100%;`}