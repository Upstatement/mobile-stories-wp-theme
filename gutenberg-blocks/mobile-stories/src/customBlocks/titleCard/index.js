
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType( 'mobile-stories/title', {
  // Block settings
  title: __( 'Mobile Stories Title Card'),
  icon: 'megaphone',
  category: 'layout',
  keywords: [
    __( 'mobile-stories — Title Card' ),
  ],

  // Markup in editor
  edit: function( props ) {
    return (
      <div>You’ll see this in the editor</div>
    );
  },

  // Markup saved to database
  save: function( props ) {
    return (
      <div>This is saved to the database and returned with the_content();</div>
    );
  },
} );
