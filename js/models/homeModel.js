(function(root) {
    'use strict';

    root.Models = root.Models || {};
    Models.HomeModel = Backbone.Model.extend({
        defaults: {
            stories: []
        },
        
        initialize: function() {
            this.attributes.stories[1] = 'Шарообразная диссертация.';
            this.attributes.stories[2] = 'Кровавая жатва.';
            this.attributes.stories[3] = 'Но попытаться стоит.';
            /*
            Один аспирант в своей диссертации допустил несколько театральных (или слишком эмоциональных) выражений, чем навлек на себя гнев руководителя:

- Ты сначала защитись, а потом выпендривайся! Когда будет степень, тогда будешь писать как хочешь! А диссертация должна быть серой, чтобы не бросалась в глаза и не раздражала оппонентов... а еще она должна быть круглой (как шарик), чтобы на экспертизе в ВАКе не было за что зацепиться!!!
*/
            
            /*
            В этом году лекции по МатАну на первом курсе у механиков читала А.Н.Таныгина. Но так сложилось, что экзамен у них принимали мы (М.А. Прохорович) с В.Г. Кротовым. К достаточно высоким требованиям В.Г. (по теоретической части курса) студенты не были готовы и в результате оценки были довольно низкие.

После экзамена, проанализировав оценки и подсчитав количество двоек, В.Г. сказал: "Миша, сегодня мы поставили более десяти двоек - наши руки в крови!"

P.S. тут следует отметить, что 30% двоек - вполне нормальный среднестатистический результат для групп, сдающих МатАн В.Г.Кротову.
            */
            
            /*
            
            Д.Г.Медведев на дне открытых дверей ММФ-2014 для абитуриентов:

- Математика это вам не китайский язык, ее за три дня не выучишь!
            
            */
        }
        
    });


}(this));