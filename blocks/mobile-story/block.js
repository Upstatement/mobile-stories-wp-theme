const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar } = wp.editor;

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
    },
    alignment: {
      type: "string"
    }
  },

  edit({ attributes, className, setAttributes }) {
    const { content, alignment } = attributes;

    function onChangeContent(newContent) {
      setAttributes({ content: newContent });
    }

    function onChangeAlignment(newAlignment) {
      setAttributes({ alignment: newAlignment });
    }

    return (
      (
        <BlockControls key="controls">
          <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
        </BlockControls>
      ),
      (
        <RichText
          tagName="p"
          className={className}
          onChange={onChangeContent}
          value={content}
        />
      )
    );
  },

  save({ attributes, className }) {
    const { content, alignment } = attributes;

    return (
      <RichText.Content
        tagName="p"
        className={className}
        style={{ textAlign: alignment }}
        value={content}
      />
    );
  }
});
