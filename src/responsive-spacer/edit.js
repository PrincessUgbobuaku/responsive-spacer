/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { InspectorControls } from "@wordpress/block-editor"; //InspectorControls → Adds controls to the right-hand sidebar.
import { PanelBody, RangeControl } from "@wordpress/components"; //PanelBody → Creates a collapsible panel (like "Typography" or "Dimensions" in Gutenberg). | RangeControl → A slider with a number input.

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { desktopHeight, tabletHeight, mobileHeight } = attributes; //one object that contains multiple values
	<>
		<InspectorControls>
			<PanelBody title="Responsive Spacer" initialOpen={true}>
				<RangeControl
					label="Desktop Height"
					value={desktopHeight}
					onChange={(value) => setAttributes({ desktopHeight: value })}
					min={0}
					max={500}
				/>
			</PanelBody>
		</InspectorControls>
		return <p {...useBlockProps()}>Responsive Spacer</p>;
	</>;
}
