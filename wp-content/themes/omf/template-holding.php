<?php
/**
 * Template Name: Holding Page
 *
 * A temporary holding home page
 */
?><!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php wp_title(); ?></title>

    <?php wp_head(); ?>

    <script src="//use.typekit.net/ycr5cje.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>
</head>
<body>

    <?php get_template_part('templates/utility/svgdefs.svg'); ?>

    <header class="Header" role="banner">

        <div class="Grid">

            <div class="Grid-cell u-size-10of12">

                <div class="Header-logo"><i>OMF</i> Ocean Modeling Forum</div>

            </div>

        </div>

    </header>

    <div class="Container">

        <section class="Banner Banner--center" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/dist/images/backgrounds/waves.jpg');">

            <header class="Banner-header">

                <div class="Banner-header-content">

                    <div class="u-container">

                        <p class="Banner-superlede">The <strong>Ocean Modeling Forum</strong> is fostering networks of scientists and managers to improve the way models are used to address the most pressing challenges facing the world’s oceans.</p>

                        <p class="Banner-message">Our new website will be available soon.</p>

                    </div>

                </div>

            </header>

        </section>

    </div>

    <?php wp_footer(); ?>
</body>
</html>