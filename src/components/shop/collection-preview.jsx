import React from 'react'

import CollectionItem from './collection-item'
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './shop.styles';

function CollectionPreview({title, items}) {
	return (
		<CollectionPreviewContainer>
			<TitleContainer>{title.toUpperCase()}</TitleContainer>
			<PreviewContainer>
				{
					items
						.filter((_, idx) => idx < 4)
						.map((item) => (
							<CollectionItem key={item.id} item={item} />
						))
				}
			</PreviewContainer>
  	</CollectionPreviewContainer>
	)
}

export default CollectionPreview
