<?php

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

function theme_enqueue_styles() {
//    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}

function remove_menus(){
    remove_menu_page( 'admin.php' ); //ダッシュボード
}
add_action( 'admin_menu', 'remove_menus', 999 );

// カスタム投稿タイプの追加
add_action('init', 'create_post_type');

function create_post_type() {
    register_post_type('news', // 投稿タイプ名の定義
            array(
        'labels' => array(
            'name' => __('新着情報'), // 表示する投稿タイプ名
            'singular_name' => __('新着情報')
        ),
        'public' => true,
        'supports' => array('title', 'thumbnail', 'custom-fields'),
        'has_archive' => true,
        'menu_position' => 4,
            )
    );
    flush_rewrite_rules(false);
    /* カスタムタクソノミー1 */
    register_taxonomy(
            'news-category', /* タクソノミーのslug */ 'news', /* 属する投稿タイプ */ array(
        'hierarchical' => true,
        'update_count_callback' => '_update_post_term_count',
        'label' => 'カテゴリー',
        'singular_label' => 'カテゴリー',
        'public' => true,
        'show_ui' => true
            )
    );
}

// 「続きを読む」をカスタマイズするためのコード
function my_excerpt_more($post) {
    return '...';
}

// 抜粋（the_excerpt()）を適当な文字数でカットして表示するコード
function my_trim_all_excerpt($text = '', $cut = 50) {
    $raw_excerpt = $text;
    if ('' == $text) {
        $text = get_the_content('');
        $text = strip_shortcodes($text);
        $text = apply_filters('the_content', $text);
        $text = str_replace(']]>', ']]>', $text);
        $text = strip_tags($text);
    }
    $excerpt_mblength = apply_filters('excerpt_mblength', $cut);
    $excerpt_more = my_excerpt_more($post);
    $text = wp_trim_words($text, $excerpt_mblength, $excerpt_more);

    return apply_filters('wp_trim_excerpt', $text, $raw_excerpt);
}

// the_excerpt()にフィルターをかけるコード
remove_filter('get_the_excerpt', 'wp_trim_excerpt');
add_filter('get_the_excerpt', 'my_trim_all_excerpt');

function search_exclude_custom_post_type($query) {
    if ($query->is_search() && $query->is_main_query() && !is_admin()) {
        $query->set('post_type', array('post'));
    }
}

function my_archives_link($html) {
    if (preg_match('/[0-9]+?<\/a>/', $html))
        $html = preg_replace('/([0-9]+?)<\/a>/', '$1年</a>', $html);
    if (preg_match('/title=[\'\"][0-9]+?[\'\"]/', $html))
        $html = preg_replace('/(title=[\'\"][0-9]+?)([\'\"])/', '$1年$2', $html);
    return $html;
}

add_filter('get_archives_link', 'my_archives_link', 10);

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');

function my_delete_local_jquery() {
    wp_deregister_script('jquery');
}

add_action('wp_enqueue_scripts', 'my_delete_local_jquery');

//function my_scripts() {
//    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js');
//}
//
//add_action('wp_enqueue_scripts', 'my_scripts');

/**
 * 検索の対象をタイトルのみにします。
 */
function posts_search_title_only($orig_search, $query) {
    // $query->is_main_query() を除いて、フィルターが設定されればどのクエリでも対象になるようにします。
    if ($query->is_search() && !is_admin()) {
        // 4.4, 4.5のWP_Query::parse_search()の処理を流用しています。(検索語の分割処理などはすでにquery_vars上にセット済のため省きます)
        global $wpdb;
        $search = '';

        $q = $query->query_vars;
        $n = !empty($q['exact']) ? '' : '%';
        $searchand = '';

        foreach ($q['search_terms'] as $term) {
            $include = '-' !== substr($term, 0, 1);
            if ($include) {
                $like_op = 'LIKE';
                $andor_op = 'OR';
            } else {
                $like_op = 'NOT LIKE';
                $andor_op = 'AND';
                $term = substr($term, 1);
            }
            $like = $n . $wpdb->esc_like($term) . $n;
            // タイトルのみ
            $search .= $wpdb->prepare("{$searchand}(($wpdb->posts.post_title $like_op %s))", $like);
            $searchand = ' AND ';
        }
        if (!empty($search)) {
            $search = " AND ({$search}) ";
            if (!is_user_logged_in())
                $search .= " AND ($wpdb->posts.post_password = '') ";
        }
        return $search;
    }
    else {
        return $orig_search;
    }
}

function remove_recent_comments_style() { 
    global $wp_widget_factory;
    remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
}
add_action( 'widgets_init', 'remove_recent_comments_style' );