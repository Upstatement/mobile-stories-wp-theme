const { registerBlockType } = wp.blocks;
const { InnerBlocks} = wp.editor;

const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph', 'core/cover-image', 'core/heading' ];


registerBlockType("mobile-stories/card", {
  title: "Mobile Story Card",

  icon: "universal-access-alt",

  category: "layout",

  supports: {
    html: false
  },

  attributes: {
    content: {
      type: "array",
      source: "children",
      selector: "p"
    }
  },

  edit({ attributes, className, setAttributes }) {
    const { content } = attributes;

    function onChangeContent(newContent) {
      setAttributes({ content: newContent });
    }

    return (
      (
        <div className={ className }>
				  <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			  </div>
      )
    );
  },

  save({ attributes, className }) {
    const { content } = attributes;

    return (
      <div>
				<InnerBlocks.Content />
			</div>
    );
  }
});
