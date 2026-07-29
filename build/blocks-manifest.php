<?php
// This file is generated. Do not modify it manually.
return array(
	'responsive-spacer' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'zonefitness/responsive-spacer',
		'version' => '0.1.0',
		'title' => 'Responsive Spacer',
		'category' => 'widgets',
		'icon' => 'editor-expand',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'desktopHeight' => array(
				'type' => 'number',
				'default' => 80
			),
			'tabletHeight' => array(
				'type' => 'number',
				'default' => 60
			),
			'mobileHeight' => array(
				'type' => 'number',
				'default' => 40
			)
		),
		'textdomain' => 'responsive-spacer',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
