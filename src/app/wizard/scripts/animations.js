'use strict';
/**
 * Created by Lucian on 9/7/16.
 */
angular.module('app').factory('AnimationService', function($rootScope, SegueService){


    /** Animations **/
    /**
     * So... here is how animations work. Animation classes are stored in a
     * 2d array where the first index is the total length of each item in the array ie:
     * a page with 4 indexes are access like this: animationRows[(4-1)][n] the Sass file is
     * loaded with delays accordingly
     * The animations should be triggered after data load.
     * Be aware when creating the ng-classes that you are all calling from the same x index
     * from the array!
     * All animations are uniform except landing which is a fade in vs a slide up
     *
     * 0,0 is always used for bottom slice
     */
    var pageIndex;
    var rows;

    //function initBase(index){
    //    pageIndex = index;
    //    //var state = 1;
    //    //if (index == 0){ state = 0; }
    //    $rootScope.animationsBase = true;
    //}
    //function stopBase(){
    //    console.log('all animations are done');
    //}

    function animate(index){
        if (($rootScope.animationRows) && ($rootScope.animationRows[0])){ //if already allocated reset data
            reInit();
        }
        else {
            $rootScope.continuity = true; //default path
        }
        pageIndex = index;
        initAnimationRows();
    }

    function initAnimationRows(){
        var foo = [];
        for (var i = 0; i <= 7; ++i)
        {
            var bar = [];
            for (var j = 0; j <= i; ++j)
            {
                var animationClass = ("ar" + i + "-" + j);
                var landing = ( pageIndex == 0 ? 'L' : '' );
                animationClass += landing;

                if ($rootScope.continuity){ //moving forward
                    bar.push([animationClass, 'cont']);
                }
                else{ //moving backward
                    bar.push([animationClass, 'back']);
                }
            }
            foo.push(bar);
        }
        $rootScope.animationRows = foo;
        rows = SegueService.templateRowCounter(pageIndex);

        $rootScope.animationRows[0][0] = ( [$rootScope.animationRows[rows][rows]] ); // sets segue block to current row count last row for cascading animations
    }

    function leaving(direction){
        for (var i = 0; i <= rows; ++i){
            if (direction) { // true is normal nav
                $rootScope.continuity = true;
                var temp = [$rootScope.animationRows[rows][i], 'leaving'];
            }
            else { // false is back
                $rootScope.continuity = false;
                var temp = [$rootScope.animationRows[rows][i], 'reversing'];
            }
            $rootScope.animationRows[rows][i]= temp;
        }
        $rootScope.animationRows[0][0] = ( [$rootScope.animationRows[rows][rows]] );
    }

    function reInit(){
        $rootScope.animationRows[0][0] = '';
    }

    return {
        //initBase: initBase,
        animate: animate,
        leaving: leaving,
        reInit: reInit
    };
});