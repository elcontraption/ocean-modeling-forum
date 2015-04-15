<?php

/**
 * Display a split text/image block.
 */

 /**
  * Collect dynamic element classes.
  */
 $block_classes = array(
     'Block'
 );

 $grid_classes = array(
     'Grid',
     'Grid--collapsable',
     'Grid--table',
 );

/**
 * Handle grid cell size.
 */
switch (get_sub_field('layout'))
{
    case 'text_48_image_72':
    case 'image_72_text_48':
        $text_cell_size = '4of12';
        $image_cell_size = '8of12';
        break;
    case 'text_72_image_48':
        $text_cell_size = '8of12';
        $image_cell_size = '4of12';
        break;
    default:
        $text_cell_size = '6of12';
        $image_cell_size = '6of12';
}

/**
 * Handle grid cell placement.
 */
switch (get_sub_field('layout'))
{
    case 'text_48_image_72':
    case 'text_50_image_50':
    case 'text_72_image_48':
        $text_cell_left = true;
        break;
    default:
        $text_cell_left = false;
}

/**
 * Vertical text placement–applied to Grid container.
 */
$text_placement_vertical = get_sub_field('text_placement_vertical');
if ($text_placement_vertical) $grid_classes[] = 'Grid--align-' . $text_placement_vertical;

/**
 * Background color.
 */
$background_color = get_sub_field('background_color');
if ($background_color !== 'custom') $block_classes[] = 'Block--background-' . $background_color;

/**
 * Text color.
 */
$text_color = get_sub_field('text_color');
if ($text_color !== 'custom') $block_classes[] = 'Block--text-' . $text_color;

?>

<section class="<?php echo implode(' ', $block_classes); ?>">

    <div class="Block-content">

        <div class="<?php echo implode(' ', $grid_classes); ?>">

            <?php if ($text_cell_left) : ?>

                <?php include locate_template('templates/blocks/split_image_text/text.php'); ?>

                <?php include locate_template('templates/blocks/split_image_text/image.php'); ?>

            <?php else : ?>

                <?php include locate_template('templates/blocks/split_image_text/image.php'); ?>

                <?php include locate_template('templates/blocks/split_image_text/text.php'); ?>

            <?php endif; ?>

        </div>

    </div>

</section>
