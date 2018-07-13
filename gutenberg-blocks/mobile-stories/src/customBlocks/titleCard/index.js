const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

import './style.scss';
import './editor.scss';

registerBlockType('card-block/main', {
  title: 'Mobile Stories Title Card',
  icon: 'megaphone',
  category: 'layout',
  attributes: {
    headline: {
      source: 'text',
      selector: '.card-headline'
		},
		subhead: {
      source: 'text',
      selector: '.card-subhead'
		},
		byline: {
      type: 'array',
      source: 'children',
      selector: '.card-byline'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card-image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card-image'
    }
	},

	// Markup in the editor
  edit({ attributes, className, setAttributes }) {
    const getImageButton = (openEvent) => {
      if(attributes.imageUrl) {
        return (
          <img
            src={ attributes.imageUrl }
            onClick={ openEvent }
            className="image"
          />
        );
      }
      else {
        return (
          <div className="button-container">
            <Button
              onClick={ openEvent }
              className="button button-large"
            >
              Pick an image
            </Button>
          </div>
        );
      }
    };

		const divStyle = {
			backgroundImage: `url(${attributes.imageUrl})`
		};

		return (
			<section className="card card-cover" style={divStyle} >
				<div className="card-inner">
					<div className="card-titles">
							<MediaUpload
							onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
							type="image"
							value={ attributes.imageID }
							render={ ({ open }) => getImageButton(open) }
						/>
						<h1 className="card-headline">
							<PlainText
								onChange={ content => setAttributes({ headline: content }) }
								value={ attributes.title }
								placeholder="Your card title"
								className="heading"
							/>
						</h1>
						<h2 className="card-subhead">
							<PlainText
								onChange={ content => setAttributes({ subhead: content }) }
								value={ attributes.subtitle }
								placeholder="Your card subtitle"
								className="heading"
							/>
						</h2>
						<p className="card-byline">
							<span>by</span>
							<PlainText
								onChange={ content => setAttributes({ byline: content }) }
								value={ attributes.byline }
								placeholder="Your byline"
								className="heading"
							/>
						</p>
					</div>
				</div>
			</section>
			);
		},

      // <div className="card card-cover">
      //   <MediaUpload
      //     onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
      //     type="image"
      //     value={ attributes.imageID }
      //     render={ ({ open }) => getImageButton(open) }
      //   />
      //   <PlainText
      //     onChange={ content => setAttributes({ headline: content }) }
      //     value={ attributes.title }
      //     placeholder="Your card title"
      //     className="heading"
      //   />
      //   <PlainText
      //     onChange={ content => setAttributes({ subhead: content }) }
      //     value={ attributes.subtitle }
      //     placeholder="Your card subtitle"
      //     className="heading"
      //   />
			// 	<PlainText
      //     onChange={ content => setAttributes({ byline: content }) }
      //     value={ attributes.byline }
      //     placeholder="Your byline"
      //     className="heading"
  //     //   />
  //     // </div>
  //   );

  // },

	// Markup saved in database
  save({ attributes }) {
		const divStyle = {
			backgroundImage: `url(${attributes.imageUrl})`
		};

    return (
		<section className="card card-cover" style={divStyle} >
			<div className="card-inner">
				<div className="card-titles">
					{attributes.headline &&
					<h1 className="card-headline">{attributes.headline}</h1>}
					{attributes.subhead &&
					<h2 className="card-subhead">{attributes.subhead}</h2>}
					{attributes.byline &&
					<p className="card-byline"><span>by</span> {attributes.byline}</p>}
				</div>
			</div>
		</section>
    );
  }
});
