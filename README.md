# sfarchitects

CSS Architecture: Scalable and Modular Architecture of CSS


Prefix meaning:
L- Layout
C- component/module
IS and HAS - states

Listing Classes structure:

l-navigation
  logo
  menu

*l-header-listings (meron kasing header for individual page, kaya may suffix akong listings sa classname ko)
  header-title
  header-description


l-breadcrumbs

l-section
  section-title
  section-description

 *c-statistics-horizontal
    statistics-title
    statistics-number
  image

l-featured
  big-title-centered
  c-featured-gallery
    architect-title
    architect-description

  *c-gallery-two-col 
  	image

  *c-gallery-three-col
  	featured-title
  	image 

  view-link

l-divider
  divider-title
  divider-description

 l-all
 	big-title-centered
 	c-all-list


l-footer

---------------------------------

Individual Classes structure:

l-navigation
  logo
  menu

*l-header-individual
	header-title


l-breadcrumbs


l-overview
  section-title
  section-description

 *c-statistics-vertical
    statistics-title
    statistics-number

l-architects
	section-title
		c-bio-horizontal
			architecture-name
				architect-name
				description
				awards
				description
				contact
				description
			architecture-image

		c-architect-quote

		c-architect-about
			about-title
			description
			keep-reading

		c-architect-projects

l-districts
	district-name
	
	*c-street
		street-name
		description
		c-bio-vertical
			architect-name
			description
			contact
			description

		c-street-images
	line-divider

	*c-street
		street-name
		c-bio-horizontal
			architect-name
			description
			contact
			description
		description

		c-street-images
	line-divider






