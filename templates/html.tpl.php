<!DOCTYPE html>
<html<?php print $html_attributes . $rdf_namespaces; ?>>
<head>
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <script src="//192.168.0.38:35729/livereload.js"></script>

    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/manifest.json">
    <link rel="shortcut icon" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="Comme un Arbre !">
    <meta name="application-name" content="Comme un Arbre !">
    <meta name="msapplication-TileColor" content="#39c4ff">
    <meta name="msapplication-TileImage" content="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/buit/img/mstile-144x144.png">
    <meta name="msapplication-config" content="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/basic/library/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">V

    <?php print $styles; ?>
    <?php print $scripts; ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
</head>
<body class="<?php print $classes; ?>" <?php print $attributes; ?>>
    <div id="skip">
        <a href="#content"><?php print t('Jump to Navigation'); ?></a>
    </div>
    <?php print $page_top; ?>
    <?php print $page; ?>
    <?php print $page_bottom; ?>
</body>
</html>
