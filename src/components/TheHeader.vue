<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__container _container">
                <div class="header__body">
                    <div class="header__main">
                        <a href="#" class="header__logo">Comforra</a>
                        <div class="header__menu menu">
                            <nav class="menu__body">
                                <ul class="menu__list">
                                    <li class="menu__item">
                                        <a href="javascript:;" class="menu__link">Products</a>
                                        <button type="button" class="menu__arrow _icon-arrow-down"></button>
                                        <ul class="menu__sub-list">
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Product 1</a>
                                            </li>
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Product 2</a>
                                            </li>
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Product 3</a>
                                            </li>
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Product 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu__item">
                                        <a href="javascript:;" class="menu__link">Rooms</a>
                                        <button type="button" class="menu__arrow _icon-arrow-down"></button>
                                        <ul class="menu__sub-list">
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Room 1</a>
                                            </li>
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Room 2</a>
                                            </li>
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Room 3</a>
                                            </li>
                                            <li class="menu__sub-item">
                                                <a href="" class="menu__sub-link">Room 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu__item">
                                        <a href="" class="menu__link">Inspirations</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="header__search">
                        <div class="search-form">
                            <button type="button" class="search-form__icon _icon-search"></button>
                            <form action="" class="search-form__form">
                                <button type="submit" class="search-form__submit _icon-search"></button>
                                <input class="search-form__input"  type="text" name="form[]" autocomplete="off" placeholder="Search item...">
                            </form>
                        </div>
                    </div>
                    <div class="header__actions actions-header">
                        <a href="" class="actions-header__item actions-header__item--favorites _icon-favorite"></a>
                        <div href="" class="actions-header__item cart-header">
                            <a href="" class="cart-header__icon _icon-cart"></a>
                            <div class="cart-header__body">
                                <ul class="cart-header__list cart-list"></ul>
                            </div>
                        </div>
                        <a href="" class="actions-header__item actions-header__item--user _ibg">
                            <img src="@/assets/img/avatar.jpg" alt="Avatar">
                        </a>
                    </div>
                    <button type="button" class="icon-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style lang="scss">
// @import "@/assets/styles/styles.scss";

.header {
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;

    &__wrapper {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 50;
    }

    &__body {
        display: flex;
        align-items: center;
        padding: 5px 0;
        min-height: 125px;
    }

    &__main {
        display: flex;
        align-items: center;
        flex: 0 0 500 / 1240 * 100%;
    }

    &__logo {
        color: $black;
        font-size: 24px;
        font-weight: 700;
        line-height: 1.5;
    }
}

.menu {
    flex: 0 1 420px;

    &__list {
        @media (min-width: $md3 + px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 3px;
        padding: 5px 0;
        position: relative;

        &:hover {
            .menu__sub-list {
                transform: translate(0, 0);
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }

            .menu__arrow {
                transform: rotate(-180deg);
            }

            .menu__arrow,
            .menu__link {
                color: $orangeColor;
            }
        }
    }

    &__link {
        font-weight: 500;
        color: inherit;
        transition: color .3s ease 0s;
    }

    &__arrow {
        margin-left: 8px;
        transition: all .3s ease 0s;
        font-size: 8px;
    }

    &__sub-list {
        position: relative;
        background-color: $orangeColor;
        padding: 15px;
        flex: 1 1 100%;

        @media (min-width: $md3 + px) {
            opacity: 0;
            visibility: hidden;
            transition: all .3s ease 0s;
            transform: translate(0px, 10px);
            min-width: 200px;
            left: 0;
            position: absolute;
            pointer-events: none;
            top: 100%;
            z-index: 1;
        }
    }

    &__sub-item {
        &:not(:last-child) {
            margin-bottom: 5px;
        }
    }

    &__sub-link {
        color: #FFF;
        line-height: 1.5;
    }
}
</style>